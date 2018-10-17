import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import BaseController from '../../../../controllers/utils/controller_factory';
import ResponseHelper from '../../../../helpers/response_helper';
import models from '../../../../models/index';

// Get expect function
const { expect } = chai;

// Set up chai.should()
chai.should();

// Set up sinon-chai
chai.use(sinonChai);

describe('Controller Factory Class', () => {
  let testObject;
  let expectedResponse;
  let params;
  let req;
  let res;
  let sandbox;

  before(() => {
    // Create sinon sandbox
    sandbox = sinon.sandbox.create();
  });

  beforeEach(() => {
    // Set up class params
    params = {
      model: models.account,
      findIncludes: [1234],
      allowedFilters: [ 'field1', 'field2' ],
      filters: {}
    };

    // Set up model attributes and stubs
    params.model.attributes = {
      id: {},
      foo: { requiredDuringCreate: true },
      bar: {},
      baz: { requiredDuringCreate: true },
    };

    // Set up request
    req = {
      body: {
        id: 'test',
        foo: 1234,
        bar: true,
        baz: 'abcd',
      },
      params: {
        id: 1234,
      },
      query: {
        limit: 1234,
      },
    };

    // Set up response
    res = {
      status: sandbox.stub().returnsThis(), // NOTE: Makes stubs chain-able
      json: sandbox.stub(),
    };

    // Set up test object
    testObject = new BaseController(params);
  });

  afterEach(() => {
    // Restore sinon sandbox
    sandbox.restore();
  });

  describe('constructor method', () => {
    it('should set up class params with default values', () => {
      // Verify params were set
      expect(testObject.params.version).to.equal(1);
      expect(testObject.params.model).to.not.be.null;
      expect(testObject.params.findIncludes.length).to.equal(1);
    });
  });

  describe('buildFilters method', () => {
    it('should build filters correctly', () => {
      let query = { 'field1': 'some filter', 'notAllowedField': 'fishy' };
      let filters = testObject._buildFilters(query);
      expect(filters).to.be.an('object').to.have.keys('field1');
      expect(filters).to.not.have.keys('notAllowedField');

    });
  });

  describe('CRUD methods', () => {
    describe('getCollection method', () => {
      beforeEach(() => {
        // Set up expected response data
        expectedResponse = ResponseHelper.defaultResponse();
      });

      context('with find errors', () => {
        beforeEach(() => {
          // Stub method
          sandbox.stub(testObject.params.model, 'findAndCountAll').rejects({});
        });

        it('should call `status` with 500 and `json` with a default response object', done => {
          // Call method
          testObject.getCollection(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(500);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without find errors and models found', () => {
        beforeEach(() => {
          // Set up expected response data
          expectedResponse = ResponseHelper.defaultResponse();
          expectedResponse.meta.count = 1234;
          expectedResponse.data = [{ id: 1234 }, { id: 2345 }];

          // Stub method
          sandbox.stub(testObject.params.model, 'findAndCountAll').resolves({
            count: 1234,
            rows: [{ id: 1234 }, { id: 2345 }],
          });
        });

        it('should call `status` with 200 and `json` with found models in the response object', done => {
          // Call method
          testObject.getCollection(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(200);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });
    });

    describe('getSingle method', () => {
      beforeEach(() => {
        // Set up expected response data
        expectedResponse = ResponseHelper.defaultResponse();
      });

      context('with find errors', () => {
        beforeEach(() => {
          // Stub method
          sandbox.stub(testObject.params.model, 'findOne').rejects({});
        });

        it('should call `status` with 500 and `json` with a default response object', done => {
          // Call method
          testObject.getSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(500);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without find errors but no model found', () => {
        beforeEach(() => {
          // Stub method
          sandbox.stub(testObject.params.model, 'findOne').resolves(false);
        });

        it('should call `status` with 404 and `json` with a default response object', done => {
          // Call method
          testObject.getSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(404);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without find errors and a model found', () => {
        beforeEach(() => {
          // Set up expected response data
          expectedResponse = ResponseHelper.defaultResponse();
          expectedResponse.meta.count = 1;
          expectedResponse.data = { id: 1234 };

          // Stub method
          sandbox.stub(testObject.params.model, 'findOne').resolves({ id: 1234 });
        });

        it('should call `status` with 200 and `json` with a model in the response object', done => {
          // Call method
          testObject.getSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(200);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });
    });

    describe('createSingle method', () => {
      beforeEach(() => {
        // Set up expected response data
        expectedResponse = ResponseHelper.defaultResponse('errors');
      });

      context('with validation errors', () => {
        beforeEach(() => {
          // NOTE: Causes validation failure
          delete req.body.baz;

          // Set up expected response data
          expectedResponse.errors.push({
            field: 'baz',
            message: 'A required field is missing from the request body.',
          });
        });

        it('should call `status` with 400 and `json` with a body of errors', () => {
          // Call method
          testObject.createSingle(req, res);

          // Verify stubs were called
          res.status.should.have.been.calledWith(400);
          res.json.should.have.been.calledWith(expectedResponse);
        });
      });

      context('with save errors', () => {
        beforeEach(() => {
          // Set up expected response data
          expectedResponse.errors.push({
            error: {},
            message: 'An error occurred attempting to save this item in the database.',
          });

          // Stub method
          sandbox.stub(testObject.params.model, 'create').rejects({});
        });

        it('should call `status` with 400 and `json` with a body of errors', done => {
          // Call method
          testObject.createSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(400);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without save errors', () => {
        beforeEach(() => {
          // Set up expected response data
          expectedResponse = ResponseHelper.defaultResponse();
          expectedResponse.meta.count = 1;
          expectedResponse.data = { id: 1234 };

          // Stub method
          sandbox.stub(testObject.params.model, 'create').resolves({ id: 1234 });
        });

        it('should call `status` with 201 and `json` with result of the save operation', done => {
          // Call method
          testObject.createSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(201);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });
    });

    describe('updateSingle method', () => {
      beforeEach(() => {
        // Set up expected response data
        expectedResponse = ResponseHelper.defaultResponse();
      });

      context('with errors', () => {
        beforeEach(() => {
          // Stub method
          sandbox.stub(testObject.params.model, 'update').rejects({});
        });

        it('should call `status` with 500 and `json` with a default response object', done => {
          // Call method
          testObject.updateSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(500);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without errors but no model updated', () => {
        beforeEach(() => {
          // Stub method
          sandbox.stub(testObject.params.model, 'update').resolves([0]);
        });

        it('should call `status` with 404 and `json` with a default response object', done => {
          // Call method
          testObject.updateSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(404);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without find errors and a model found', () => {
        beforeEach(() => {
          // Set up expected response data
          expectedResponse = ResponseHelper.defaultResponse();
          expectedResponse.meta.count = 1;
          expectedResponse.data = { id: 1234 };

          // Stub method
          sandbox.stub(testObject.params.model, 'update').resolves([1, [{ id: 1234 }]]);
        });

        it('should call `status` with 200 and `json` with a model in the response object', done => {
          // Call method
          testObject.updateSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(200);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });
    });

    describe('deleteSingle method', () => {
      beforeEach(() => {
        // Set up expected response data
        expectedResponse = ResponseHelper.defaultResponse();
      });

      context('with errors', () => {
        beforeEach(() => {
          // Stub method
          sandbox.stub(testObject.params.model, 'destroy').rejects({});
        });

        it('should call `status` with 500 and `json` with a default response object', done => {
          // Call method
          testObject.deleteSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(500);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without errors but no model deleted', () => {
        beforeEach(() => {
          // Stub method
          sandbox.stub(testObject.params.model, 'destroy').resolves(0);
        });

        it('should call `status` with 404 and `json` with a default response object', done => {
          // Call method
          testObject.deleteSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(404);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });

      context('without find errors and a model deleted', () => {
        beforeEach(() => {
          // Set up expected response data
          expectedResponse = ResponseHelper.defaultResponse();
          expectedResponse.meta.count = 2345;
          expectedResponse.data = { id: 1234 };

          // Stub method
          sandbox.stub(testObject.params.model, 'destroy').resolves(2345);
        });

        it('should call `status` with 200 and `json` with a model ID in the response object', done => {
          // Call method
          testObject.deleteSingle(req, res);

          setTimeout(() => {
            // Verify stubs were called
            res.status.should.have.been.calledWith(200);
            res.json.should.have.been.calledWith(expectedResponse);

            // Indicate test is done
            done();
          }, 1);
        });
      });
    });
  });

  describe('response methods', () => {
    describe('methodNotAllowed method', () => {
      it('should call `status` with 405 and `json` with a default response object', () => {
        // Call method
        testObject.methodNotAllowed(req, res);

        // Verify stubs were called
        res.status.should.have.been.calledWith(405);
        res.json.should.have.been.calledWith(ResponseHelper.defaultResponse());
      });
    });

    describe('notFound method', () => {
      it('should call `status` with 404 and `json` with a default response object', () => {
        // Call method
        testObject.notFound(req, res);

        // Verify stubs were called
        res.status.should.have.been.calledWith(404);
        res.json.should.have.been.calledWith(ResponseHelper.defaultResponse());
      });
    });
  });
});
