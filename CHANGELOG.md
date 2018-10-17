# Change Log

## [1.1.0](https://github.com/soulcycle/podium-gbp-backend/tree/1.1.0) (10-03-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/1.0.0...1.1.0)

**Merged pull requests:**

- Updates k8s declarations to support rolling updates via Harness [\#336](https://github.com/soulcycle/podium-gbp-backend/pull/336) ([marksost](https://github.com/marksost))
- Dev -\> Master [\#335](https://github.com/soulcycle/podium-gbp-backend/pull/335) ([achi2211](https://github.com/achi2211))
- fix / pe-5579 [\#334](https://github.com/soulcycle/podium-gbp-backend/pull/334) ([matiasfessia](https://github.com/matiasfessia))
- Add backrow debug info response [\#333](https://github.com/soulcycle/podium-gbp-backend/pull/333) ([achi2211](https://github.com/achi2211))
- Add backrow debug info response [\#332](https://github.com/soulcycle/podium-gbp-backend/pull/332) ([achi2211](https://github.com/achi2211))
- Fix reservation counts... [\#331](https://github.com/soulcycle/podium-gbp-backend/pull/331) ([SebaSOFT](https://github.com/SebaSOFT))
- Add backrow debug info [\#330](https://github.com/soulcycle/podium-gbp-backend/pull/330) ([achi2211](https://github.com/achi2211))
- Fixes condition lost in merge [\#329](https://github.com/soulcycle/podium-gbp-backend/pull/329) ([SebaSOFT](https://github.com/SebaSOFT))
- Update replica count [\#328](https://github.com/soulcycle/podium-gbp-backend/pull/328) ([amendozasoul](https://github.com/amendozasoul))
- Dev-\> Master [\#327](https://github.com/soulcycle/podium-gbp-backend/pull/327) ([achi2211](https://github.com/achi2211))
- Fix/cancelled group reservations notshown [\#326](https://github.com/soulcycle/podium-gbp-backend/pull/326) ([SebaSOFT](https://github.com/SebaSOFT))
- Refactor: seeders to connect to FED and W77 [\#325](https://github.com/soulcycle/podium-gbp-backend/pull/325) ([achi2211](https://github.com/achi2211))
- Fix/notfound whe searching bookings [\#324](https://github.com/soulcycle/podium-gbp-backend/pull/324) ([SebaSOFT](https://github.com/SebaSOFT))
- local-init: Use PODIUMPATH environment variable by default [\#323](https://github.com/soulcycle/podium-gbp-backend/pull/323) ([jroman00](https://github.com/jroman00))
- Prevent ccalling authorizenet on group\_reservations with all credits\($0 [\#322](https://github.com/soulcycle/podium-gbp-backend/pull/322) ([SebaSOFT](https://github.com/SebaSOFT))
- feature / pe-5208 [\#313](https://github.com/soulcycle/podium-gbp-backend/pull/313) ([matiasfessia](https://github.com/matiasfessia))

## [1.0.0](https://github.com/soulcycle/podium-gbp-backend/tree/1.0.0) (09-26-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.38.0...1.0.0)

**Merged pull requests:**

- Refactor: seeders to connect to FED and W77 [\#321](https://github.com/soulcycle/podium-gbp-backend/pull/321) ([achi2211](https://github.com/achi2211))
- fix / update seeders [\#320](https://github.com/soulcycle/podium-gbp-backend/pull/320) ([matiasfessia](https://github.com/matiasfessia))
- PE-4284 - Credits estimation and total discounted [\#319](https://github.com/soulcycle/podium-gbp-backend/pull/319) ([SebaSOFT](https://github.com/SebaSOFT))
- \[FEATURE/MIGRATION\] Adds database migrations only [\#318](https://github.com/soulcycle/podium-gbp-backend/pull/318) ([mauhftw](https://github.com/mauhftw))
- AuthNet has a responseCode for the transaction even if result was OK [\#315](https://github.com/soulcycle/podium-gbp-backend/pull/315) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.38.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.38.0) (09-19-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.37.0...0.38.0)

**Merged pull requests:**

- Fix price calculation was being parsed as integer number [\#316](https://github.com/soulcycle/podium-gbp-backend/pull/316) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.37.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.37.0) (09-18-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.36.0...0.37.0)

**Merged pull requests:**

- fix / update seeders [\#314](https://github.com/soulcycle/podium-gbp-backend/pull/314) ([matiasfessia](https://github.com/matiasfessia))
- Fix authorize.net flag config [\#312](https://github.com/soulcycle/podium-gbp-backend/pull/312) ([achi2211](https://github.com/achi2211))
- \[FEATURE/K8S\] Authorize transaction key updates [\#311](https://github.com/soulcycle/podium-gbp-backend/pull/311) ([mauhftw](https://github.com/mauhftw))
- fix / pe-5183 [\#310](https://github.com/soulcycle/podium-gbp-backend/pull/310) ([matiasfessia](https://github.com/matiasfessia))

## [0.36.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.36.0) (09-14-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.35.0...0.36.0)

**Merged pull requests:**

- Add environment variable for authorize net sandbox enabling [\#309](https://github.com/soulcycle/podium-gbp-backend/pull/309) ([achi2211](https://github.com/achi2211))
- \[FEATURE/K8S\] Adds authorize\_is\_prod env var to k8s [\#308](https://github.com/soulcycle/podium-gbp-backend/pull/308) ([mauhftw](https://github.com/mauhftw))
- Feature / PE-5154 [\#307](https://github.com/soulcycle/podium-gbp-backend/pull/307) ([matiasfessia](https://github.com/matiasfessia))

## [0.35.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.35.0) (09-12-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.34.0...0.35.0)

**Merged pull requests:**

- FED sc\_user\_ids renewed for QA [\#306](https://github.com/soulcycle/podium-gbp-backend/pull/306) ([SebaSOFT](https://github.com/SebaSOFT))
- PE-5083 - Adds production configs [\#305](https://github.com/soulcycle/podium-gbp-backend/pull/305) ([marksost](https://github.com/marksost))
- fix / condition wrong in account validation delete user [\#304](https://github.com/soulcycle/podium-gbp-backend/pull/304) ([matiasfessia](https://github.com/matiasfessia))
- Fix/add second message fed [\#303](https://github.com/soulcycle/podium-gbp-backend/pull/303) ([SebaSOFT](https://github.com/SebaSOFT))
- fix / delete user endpoint [\#302](https://github.com/soulcycle/podium-gbp-backend/pull/302) ([matiasfessia](https://github.com/matiasfessia))

## [0.34.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.34.0) (09-11-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.33.1...0.34.0)

**Merged pull requests:**

- PE-5058 - HTTP -\> HTTPS [\#301](https://github.com/soulcycle/podium-gbp-backend/pull/301) ([marksost](https://github.com/marksost))

## [0.33.1](https://github.com/soulcycle/podium-gbp-backend/tree/0.33.1) (09-10-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.33.0...0.33.1)

**Merged pull requests:**

- feature / pe 5062 [\#300](https://github.com/soulcycle/podium-gbp-backend/pull/300) ([matiasfessia](https://github.com/matiasfessia))
- Seeders updated [\#299](https://github.com/soulcycle/podium-gbp-backend/pull/299) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature / Change email subject account activation [\#298](https://github.com/soulcycle/podium-gbp-backend/pull/298) ([matiasfessia](https://github.com/matiasfessia))
- Expand sequelize connection pool options [\#297](https://github.com/soulcycle/podium-gbp-backend/pull/297) ([chrisprzybysoul](https://github.com/chrisprzybysoul))
- Added a DB transaction around the booking confirmation [\#296](https://github.com/soulcycle/podium-gbp-backend/pull/296) ([SebaSOFT](https://github.com/SebaSOFT))
- Added CGB\_BACKEND\_STATSD\_HOST env var = datadog-agent [\#295](https://github.com/soulcycle/podium-gbp-backend/pull/295) ([BastianM3](https://github.com/BastianM3))

## [0.33.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.33.0) (09-06-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.32.0...0.33.0)

**Merged pull requests:**

- fix: fe hostname tld should be .it instead of .net [\#288](https://github.com/soulcycle/podium-gbp-backend/pull/288) ([chrisprzybysoul](https://github.com/chrisprzybysoul))

## [0.32.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.32.0) (09-05-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.31.0...0.32.0)

**Merged pull requests:**

- Activation now is only for requests, deactivation runs using editAccount [\#294](https://github.com/soulcycle/podium-gbp-backend/pull/294) ([SebaSOFT](https://github.com/SebaSOFT))
- Hotfix/error response credits [\#293](https://github.com/soulcycle/podium-gbp-backend/pull/293) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.31.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.31.0) (09-05-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.30.0...0.31.0)

**Merged pull requests:**

- Feature/pe 4272 bikemap with credits [\#292](https://github.com/soulcycle/podium-gbp-backend/pull/292) ([SebaSOFT](https://github.com/SebaSOFT))
- Bugfix/several fixes [\#291](https://github.com/soulcycle/podium-gbp-backend/pull/291) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature - PE-4751 [\#290](https://github.com/soulcycle/podium-gbp-backend/pull/290) ([matiasfessia](https://github.com/matiasfessia))
- Fixes: requested status for accounts, fixes on messages and mails [\#289](https://github.com/soulcycle/podium-gbp-backend/pull/289) ([SebaSOFT](https://github.com/SebaSOFT))
- \[REFACTOR/MIGRATION\] changes in migrations interpreter [\#287](https://github.com/soulcycle/podium-gbp-backend/pull/287) ([mauhftw](https://github.com/mauhftw))
- API Documentation Standardization [\#286](https://github.com/soulcycle/podium-gbp-backend/pull/286) ([BastianM3](https://github.com/BastianM3))
- \[FIX/Docker-file\] remove google-cloud-sdk [\#285](https://github.com/soulcycle/podium-gbp-backend/pull/285) ([mauhftw](https://github.com/mauhftw))
- \[FEATURE/Dockerfile\] Adds google-cloud-sdk to dockerimage [\#284](https://github.com/soulcycle/podium-gbp-backend/pull/284) ([mauhftw](https://github.com/mauhftw))

## [0.30.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.30.0) (08-29-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.29.0...0.30.0)

**Merged pull requests:**

- Credits query was in the wrong call [\#283](https://github.com/soulcycle/podium-gbp-backend/pull/283) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix of rsc\_user\_id in accounts seeder and email fix to only be shown … [\#282](https://github.com/soulcycle/podium-gbp-backend/pull/282) ([SebaSOFT](https://github.com/SebaSOFT))
- updating SoulCycle user ids for the seeded users [\#281](https://github.com/soulcycle/podium-gbp-backend/pull/281) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature/pe 4281 credit in dashboard [\#280](https://github.com/soulcycle/podium-gbp-backend/pull/280) ([SebaSOFT](https://github.com/SebaSOFT))
- Fixed ORM accounts alias not working [\#279](https://github.com/soulcycle/podium-gbp-backend/pull/279) ([SebaSOFT](https://github.com/SebaSOFT))
- Fixing group reservation check endpoint [\#278](https://github.com/soulcycle/podium-gbp-backend/pull/278) ([SebaSOFT](https://github.com/SebaSOFT))
- Cancellation fixes deep models [\#277](https://github.com/soulcycle/podium-gbp-backend/pull/277) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature/pe 4267 cancel spot [\#276](https://github.com/soulcycle/podium-gbp-backend/pull/276) ([SebaSOFT](https://github.com/SebaSOFT))
- Bugfix: Backrow update fix [\#275](https://github.com/soulcycle/podium-gbp-backend/pull/275) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature/backrow check claimed [\#274](https://github.com/soulcycle/podium-gbp-backend/pull/274) ([SebaSOFT](https://github.com/SebaSOFT))
- Bugfix\(PE-4663\): Only show active regions [\#273](https://github.com/soulcycle/podium-gbp-backend/pull/273) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.29.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.29.0) (08-20-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.28.0...0.29.0)

**Merged pull requests:**

- Fixes for Salesforce converting leads into costumers [\#272](https://github.com/soulcycle/podium-gbp-backend/pull/272) ([SebaSOFT](https://github.com/SebaSOFT))
- Merge branch 'master' into fix\_fixes\_backrow [\#271](https://github.com/soulcycle/podium-gbp-backend/pull/271) ([SebaSOFT](https://github.com/SebaSOFT))
- Auth Middleware didnt handle Promises well enough [\#268](https://github.com/soulcycle/podium-gbp-backend/pull/268) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.28.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.28.0) (08-15-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.27.0...0.28.0)

**Merged pull requests:**

- Round amount in 2 decimals [\#270](https://github.com/soulcycle/podium-gbp-backend/pull/270) ([achi2211](https://github.com/achi2211))
- Fixes for the new Backrow api and better showing errors in the console [\#269](https://github.com/soulcycle/podium-gbp-backend/pull/269) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.27.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.27.0) (08-13-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.26.0...0.27.0)

**Merged pull requests:**

- Allow user delete an organizer [\#267](https://github.com/soulcycle/podium-gbp-backend/pull/267) ([achi2211](https://github.com/achi2211))
- Update Fed users [\#266](https://github.com/soulcycle/podium-gbp-backend/pull/266) ([achi2211](https://github.com/achi2211))
- Fixing CPT creation that allowed duplicated emails [\#265](https://github.com/soulcycle/podium-gbp-backend/pull/265) ([SebaSOFT](https://github.com/SebaSOFT))
- Load user data using the registration hash [\#264](https://github.com/soulcycle/podium-gbp-backend/pull/264) ([achi2211](https://github.com/achi2211))
- Fix for link colors in email templates [\#263](https://github.com/soulcycle/podium-gbp-backend/pull/263) ([SebaSOFT](https://github.com/SebaSOFT))
- Adding a bigger limit on the regions request to avoid default of 10 [\#262](https://github.com/soulcycle/podium-gbp-backend/pull/262) ([SebaSOFT](https://github.com/SebaSOFT))
- Fixing last name in account rider id user registration [\#261](https://github.com/soulcycle/podium-gbp-backend/pull/261) ([SebaSOFT](https://github.com/SebaSOFT))
- PE-4145 Revoke claimed seat [\#260](https://github.com/soulcycle/podium-gbp-backend/pull/260) ([achi2211](https://github.com/achi2211))
- PE-4349 fix ordering in classes results [\#259](https://github.com/soulcycle/podium-gbp-backend/pull/259) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.26.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.26.0) (08-08-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.25.0...0.26.0)

**Merged pull requests:**

- Fix class hour and revoke [\#258](https://github.com/soulcycle/podium-gbp-backend/pull/258) ([achi2211](https://github.com/achi2211))
- Fixing account name for the main account raider user [\#257](https://github.com/soulcycle/podium-gbp-backend/pull/257) ([SebaSOFT](https://github.com/SebaSOFT))
- Doing lead convert on the account activation [\#256](https://github.com/soulcycle/podium-gbp-backend/pull/256) ([SebaSOFT](https://github.com/SebaSOFT))
- Refactor revoke feature [\#255](https://github.com/soulcycle/podium-gbp-backend/pull/255) ([achi2211](https://github.com/achi2211))
- Update confirm booking payload [\#254](https://github.com/soulcycle/podium-gbp-backend/pull/254) ([achi2211](https://github.com/achi2211))
- createAccount FED User registration [\#253](https://github.com/soulcycle/podium-gbp-backend/pull/253) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.25.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.25.0) (08-07-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.24.0...0.25.0)

**Merged pull requests:**

- Feature/pe 4301 fed account [\#252](https://github.com/soulcycle/podium-gbp-backend/pull/252) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix/update booking payload [\#251](https://github.com/soulcycle/podium-gbp-backend/pull/251) ([achi2211](https://github.com/achi2211))
- Better log reporting for axios errors [\#250](https://github.com/soulcycle/podium-gbp-backend/pull/250) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.24.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.24.0) (08-06-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.23.0...0.24.0)

## [0.23.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.23.0) (08-03-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.22.0...0.23.0)

**Merged pull requests:**

- Fix/add sc id booking [\#249](https://github.com/soulcycle/podium-gbp-backend/pull/249) ([achi2211](https://github.com/achi2211))

## [0.22.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.22.0) (08-03-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.21.0...0.22.0)

**Merged pull requests:**

- update sc user id’s [\#247](https://github.com/soulcycle/podium-gbp-backend/pull/247) ([achi2211](https://github.com/achi2211))

## [0.21.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.21.0) (08-03-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.20.0...0.21.0)

**Merged pull requests:**

- Assign sc id on booking [\#246](https://github.com/soulcycle/podium-gbp-backend/pull/246) ([achi2211](https://github.com/achi2211))
- Fix for accounts stats where it was tconsidering other transactions [\#245](https://github.com/soulcycle/podium-gbp-backend/pull/245) ([SebaSOFT](https://github.com/SebaSOFT))
- Fixes on organizer send email. Email sender now report errors. [\#244](https://github.com/soulcycle/podium-gbp-backend/pull/244) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix/refactor backrow responses [\#243](https://github.com/soulcycle/podium-gbp-backend/pull/243) ([achi2211](https://github.com/achi2211))

## [0.20.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.20.0) (08-01-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.19.0...0.20.0)

**Merged pull requests:**

- New IDS for seeders [\#242](https://github.com/soulcycle/podium-gbp-backend/pull/242) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature/sales force soap [\#241](https://github.com/soulcycle/podium-gbp-backend/pull/241) ([SebaSOFT](https://github.com/SebaSOFT))
- Add search classes filter [\#240](https://github.com/soulcycle/podium-gbp-backend/pull/240) ([achi2211](https://github.com/achi2211))

## [0.19.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.19.0) (07-31-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.18.0...0.19.0)

**Merged pull requests:**

- fix send claim email [\#239](https://github.com/soulcycle/podium-gbp-backend/pull/239) ([achi2211](https://github.com/achi2211))
- Fix/fix account response [\#238](https://github.com/soulcycle/podium-gbp-backend/pull/238) ([achi2211](https://github.com/achi2211))
- Signup Telefone number now required and nock mocked/corrected [\#237](https://github.com/soulcycle/podium-gbp-backend/pull/237) ([SebaSOFT](https://github.com/SebaSOFT))
- Avoid duplicated logos on templastes... [\#236](https://github.com/soulcycle/podium-gbp-backend/pull/236) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix account response [\#235](https://github.com/soulcycle/podium-gbp-backend/pull/235) ([achi2211](https://github.com/achi2211))
- add group booking token on dashboard [\#234](https://github.com/soulcycle/podium-gbp-backend/pull/234) ([achi2211](https://github.com/achi2211))
- Feature claim any [\#233](https://github.com/soulcycle/podium-gbp-backend/pull/233) ([achi2211](https://github.com/achi2211))
- SFORCE variables changed for SALESFORCE [\#232](https://github.com/soulcycle/podium-gbp-backend/pull/232) ([SebaSOFT](https://github.com/SebaSOFT))
- fix reservation issue [\#231](https://github.com/soulcycle/podium-gbp-backend/pull/231) ([achi2211](https://github.com/achi2211))
- PE-4175: leverage current role accross the entire value app [\#230](https://github.com/soulcycle/podium-gbp-backend/pull/230) ([SebaSOFT](https://github.com/SebaSOFT))
- fix table name [\#229](https://github.com/soulcycle/podium-gbp-backend/pull/229) ([achi2211](https://github.com/achi2211))
- Feature/pe 4033 ad lead [\#228](https://github.com/soulcycle/podium-gbp-backend/pull/228) ([SebaSOFT](https://github.com/SebaSOFT))
- BikeMap timer refactor [\#227](https://github.com/soulcycle/podium-gbp-backend/pull/227) ([achi2211](https://github.com/achi2211))
- Allow the user to be valid if inactive but with a hash [\#226](https://github.com/soulcycle/podium-gbp-backend/pull/226) ([SebaSOFT](https://github.com/SebaSOFT))
- \[FEATURE/PE-4117\] SFORCE ENV VARS [\#225](https://github.com/soulcycle/podium-gbp-backend/pull/225) ([mauhftw](https://github.com/mauhftw))
- Fix receipts in ghost mode [\#224](https://github.com/soulcycle/podium-gbp-backend/pull/224) ([achi2211](https://github.com/achi2211))
- Feature/pe 4026 salesforce communication [\#223](https://github.com/soulcycle/podium-gbp-backend/pull/223) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix/assign customer profile account [\#222](https://github.com/soulcycle/podium-gbp-backend/pull/222) ([achi2211](https://github.com/achi2211))

## [0.18.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.18.0) (07-24-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.17.0...0.18.0)

**Merged pull requests:**

- Fix for email and Fix for Stats Query [\#221](https://github.com/soulcycle/podium-gbp-backend/pull/221) ([SebaSOFT](https://github.com/SebaSOFT))
- Fixes - Receipt/Dashobard [\#220](https://github.com/soulcycle/podium-gbp-backend/pull/220) ([achi2211](https://github.com/achi2211))
- fix user relation on checkout [\#219](https://github.com/soulcycle/podium-gbp-backend/pull/219) ([achi2211](https://github.com/achi2211))
- Accounts should always be created as inactive [\#218](https://github.com/soulcycle/podium-gbp-backend/pull/218) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix/fix dashobard send invite [\#217](https://github.com/soulcycle/podium-gbp-backend/pull/217) ([achi2211](https://github.com/achi2211))
- fix/seeders [\#216](https://github.com/soulcycle/podium-gbp-backend/pull/216) ([achi2211](https://github.com/achi2211))
- Fix/update seeders [\#215](https://github.com/soulcycle/podium-gbp-backend/pull/215) ([achi2211](https://github.com/achi2211))
- Fix for descriptive Login Incorrect message [\#214](https://github.com/soulcycle/podium-gbp-backend/pull/214) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix/receipt fixes [\#213](https://github.com/soulcycle/podium-gbp-backend/pull/213) ([achi2211](https://github.com/achi2211))
- Fix - Add account info [\#212](https://github.com/soulcycle/podium-gbp-backend/pull/212) ([achi2211](https://github.com/achi2211))
- Fix Avalara key ID [\#211](https://github.com/soulcycle/podium-gbp-backend/pull/211) ([achi2211](https://github.com/achi2211))
- Receipt and checkout fixes [\#210](https://github.com/soulcycle/podium-gbp-backend/pull/210) ([achi2211](https://github.com/achi2211))
- Fix for FED errors not being propagated to the final catch block [\#209](https://github.com/soulcycle/podium-gbp-backend/pull/209) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix/reservations mails login fed [\#208](https://github.com/soulcycle/podium-gbp-backend/pull/208) ([SebaSOFT](https://github.com/SebaSOFT))
- Revoke and fixes [\#207](https://github.com/soulcycle/podium-gbp-backend/pull/207) ([achi2211](https://github.com/achi2211))
- Update email after claim login/signup [\#206](https://github.com/soulcycle/podium-gbp-backend/pull/206) ([achi2211](https://github.com/achi2211))
- Fixed for PE-4023 and PE-3828 [\#205](https://github.com/soulcycle/podium-gbp-backend/pull/205) ([SebaSOFT](https://github.com/SebaSOFT))
- Update Avalara Information to backrow [\#204](https://github.com/soulcycle/podium-gbp-backend/pull/204) ([achi2211](https://github.com/achi2211))
- \[FEATURE/PE-4003\] Avalara and firebase env vars [\#203](https://github.com/soulcycle/podium-gbp-backend/pull/203) ([mauhftw](https://github.com/mauhftw))
- Dev-\>Master [\#202](https://github.com/soulcycle/podium-gbp-backend/pull/202) ([achi2211](https://github.com/achi2211))
- Fix/error messages fixes [\#201](https://github.com/soulcycle/podium-gbp-backend/pull/201) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix for the account query [\#200](https://github.com/soulcycle/podium-gbp-backend/pull/200) ([SebaSOFT](https://github.com/SebaSOFT))
- Receipt information endpoint [\#199](https://github.com/soulcycle/podium-gbp-backend/pull/199) ([achi2211](https://github.com/achi2211))
- Feature/receipt [\#198](https://github.com/soulcycle/podium-gbp-backend/pull/198) ([achi2211](https://github.com/achi2211))
- Fixes invalid phone number and organizer permissions [\#197](https://github.com/soulcycle/podium-gbp-backend/pull/197) ([SebaSOFT](https://github.com/SebaSOFT))
- Hot fix  [\#196](https://github.com/soulcycle/podium-gbp-backend/pull/196) ([achi2211](https://github.com/achi2211))
- Refactor/account group booking [\#195](https://github.com/soulcycle/podium-gbp-backend/pull/195) ([achi2211](https://github.com/achi2211))
- FED signup verify phone [\#194](https://github.com/soulcycle/podium-gbp-backend/pull/194) ([SebaSOFT](https://github.com/SebaSOFT))
- Refactor/account group booking [\#193](https://github.com/soulcycle/podium-gbp-backend/pull/193) ([achi2211](https://github.com/achi2211))
- update seeders [\#192](https://github.com/soulcycle/podium-gbp-backend/pull/192) ([achi2211](https://github.com/achi2211))
- Feature/avalara integration [\#191](https://github.com/soulcycle/podium-gbp-backend/pull/191) ([achi2211](https://github.com/achi2211))
- Feature/avalara integration [\#190](https://github.com/soulcycle/podium-gbp-backend/pull/190) ([achi2211](https://github.com/achi2211))
- Fix: FED login and auth [\#189](https://github.com/soulcycle/podium-gbp-backend/pull/189) ([SebaSOFT](https://github.com/SebaSOFT))
- Implement email templates [\#187](https://github.com/soulcycle/podium-gbp-backend/pull/187) ([SebaSOFT](https://github.com/SebaSOFT))
- Account Region fix for uedit accounts... [\#186](https://github.com/soulcycle/podium-gbp-backend/pull/186) ([SebaSOFT](https://github.com/SebaSOFT))
- PE-3767 & PE-2438 statistics endpoints [\#185](https://github.com/soulcycle/podium-gbp-backend/pull/185) ([SebaSOFT](https://github.com/SebaSOFT))
- fix global settings issue [\#184](https://github.com/soulcycle/podium-gbp-backend/pull/184) ([achi2211](https://github.com/achi2211))
- Add max min settings on bikemap [\#183](https://github.com/soulcycle/podium-gbp-backend/pull/183) ([achi2211](https://github.com/achi2211))
- Add max/min bikes on booking and fix discount  [\#182](https://github.com/soulcycle/podium-gbp-backend/pull/182) ([achi2211](https://github.com/achi2211))
- fix bikemap query [\#181](https://github.com/soulcycle/podium-gbp-backend/pull/181) ([achi2211](https://github.com/achi2211))
- Fix/account fixes [\#180](https://github.com/soulcycle/podium-gbp-backend/pull/180) ([achi2211](https://github.com/achi2211))
- Business Unit, Last Name. For Users and account [\#179](https://github.com/soulcycle/podium-gbp-backend/pull/179) ([SebaSOFT](https://github.com/SebaSOFT))
- Create account fix [\#178](https://github.com/soulcycle/podium-gbp-backend/pull/178) ([SebaSOFT](https://github.com/SebaSOFT))
- Booking Refactor and fixes [\#177](https://github.com/soulcycle/podium-gbp-backend/pull/177) ([achi2211](https://github.com/achi2211))

## [0.17.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.17.0) (07-05-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.16.0...0.17.0)

**Merged pull requests:**

- PE-3492: Make sure all account queries only return active users [\#176](https://github.com/soulcycle/podium-gbp-backend/pull/176) ([SebaSOFT](https://github.com/SebaSOFT))
- Hotfix/pricing modification fix [\#175](https://github.com/soulcycle/podium-gbp-backend/pull/175) ([SebaSOFT](https://github.com/SebaSOFT))
- Fix reservation issue on booking group [\#174](https://github.com/soulcycle/podium-gbp-backend/pull/174) ([achi2211](https://github.com/achi2211))
- Checkout fixes/improvements  [\#173](https://github.com/soulcycle/podium-gbp-backend/pull/173) ([achi2211](https://github.com/achi2211))
- Hotfix/add hash 2user lists [\#172](https://github.com/soulcycle/podium-gbp-backend/pull/172) ([SebaSOFT](https://github.com/SebaSOFT))
- Overwriting global settings [\#171](https://github.com/soulcycle/podium-gbp-backend/pull/171) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.16.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.16.0) (07-02-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.15.0...0.16.0)

**Merged pull requests:**

- Dev -\> Master [\#170](https://github.com/soulcycle/podium-gbp-backend/pull/170) ([achi2211](https://github.com/achi2211))
- fix silkroad request [\#169](https://github.com/soulcycle/podium-gbp-backend/pull/169) ([achi2211](https://github.com/achi2211))
- Dev -\> Master [\#168](https://github.com/soulcycle/podium-gbp-backend/pull/168) ([achi2211](https://github.com/achi2211))
- update backrow confirm payload [\#167](https://github.com/soulcycle/podium-gbp-backend/pull/167) ([achi2211](https://github.com/achi2211))
- New response format integration [\#166](https://github.com/soulcycle/podium-gbp-backend/pull/166) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature/pe 3516 account management controllers [\#165](https://github.com/soulcycle/podium-gbp-backend/pull/165) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature/pe 3516 account management controllers [\#164](https://github.com/soulcycle/podium-gbp-backend/pull/164) ([SebaSOFT](https://github.com/SebaSOFT))
- \[FEATURE/README\] Documentation updates [\#163](https://github.com/soulcycle/podium-gbp-backend/pull/163) ([mauhftw](https://github.com/mauhftw))

## [0.15.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.15.0) (06-28-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.14.1...0.15.0)

**Merged pull requests:**

- PE-3625 - Adds image pull policy to k8s declaration\(s\) [\#162](https://github.com/soulcycle/podium-gbp-backend/pull/162) ([marksost](https://github.com/marksost))
- fixes [\#161](https://github.com/soulcycle/podium-gbp-backend/pull/161) ([achi2211](https://github.com/achi2211))
- Reservations response refactor [\#160](https://github.com/soulcycle/podium-gbp-backend/pull/160) ([achi2211](https://github.com/achi2211))
- Refactor response booking and fixes [\#159](https://github.com/soulcycle/podium-gbp-backend/pull/159) ([achi2211](https://github.com/achi2211))
- PE-3516 account management controllers \(studios\) [\#158](https://github.com/soulcycle/podium-gbp-backend/pull/158) ([SebaSOFT](https://github.com/SebaSOFT))
- Feature/pe 3516 account management controllers [\#157](https://github.com/soulcycle/podium-gbp-backend/pull/157) ([SebaSOFT](https://github.com/SebaSOFT))
- \[REFACTOR/DOCKERFILE\] Adds package-json.lock [\#156](https://github.com/soulcycle/podium-gbp-backend/pull/156) ([mauhftw](https://github.com/mauhftw))
- silkroad small fixes [\#155](https://github.com/soulcycle/podium-gbp-backend/pull/155) ([achi2211](https://github.com/achi2211))
- Account response refactor [\#154](https://github.com/soulcycle/podium-gbp-backend/pull/154) ([achi2211](https://github.com/achi2211))
- pe 3516 account management controllers [\#153](https://github.com/soulcycle/podium-gbp-backend/pull/153) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.14.1](https://github.com/soulcycle/podium-gbp-backend/tree/0.14.1) (06-22-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.14.0...0.14.1)

**Merged pull requests:**

- Hot fix/fix user [\#152](https://github.com/soulcycle/podium-gbp-backend/pull/152) ([achi2211](https://github.com/achi2211))
- Format fix [\#151](https://github.com/soulcycle/podium-gbp-backend/pull/151) ([marksost](https://github.com/marksost))

## [0.14.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.14.0) (06-22-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.13.0...0.14.0)

**Merged pull requests:**

- Master -\> Dev [\#150](https://github.com/soulcycle/podium-gbp-backend/pull/150) ([achi2211](https://github.com/achi2211))
- Feature/new controller response [\#149](https://github.com/soulcycle/podium-gbp-backend/pull/149) ([SebaSOFT](https://github.com/SebaSOFT))
- \[FIX/K8S\] config vars updates [\#147](https://github.com/soulcycle/podium-gbp-backend/pull/147) ([mauhftw](https://github.com/mauhftw))

## [0.13.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.13.0) (06-20-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.12.0...0.13.0)

**Merged pull requests:**

- PE-3169 - Adds rolling update support. Removes version label. Adds replica configs [\#148](https://github.com/soulcycle/podium-gbp-backend/pull/148) ([marksost](https://github.com/marksost))
- Users shouldn be created as active in any case [\#146](https://github.com/soulcycle/podium-gbp-backend/pull/146) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.12.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.12.0) (06-19-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.11.0...0.12.0)

**Merged pull requests:**

- Fixes claim error on invitation send [\#145](https://github.com/soulcycle/podium-gbp-backend/pull/145) ([SebaSOFT](https://github.com/SebaSOFT))
- Hotfix: send email functions... [\#144](https://github.com/soulcycle/podium-gbp-backend/pull/144) ([SebaSOFT](https://github.com/SebaSOFT))
- Add cors [\#143](https://github.com/soulcycle/podium-gbp-backend/pull/143) ([achi2211](https://github.com/achi2211))

## [0.11.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.11.0) (06-16-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.10.0...0.11.0)

**Merged pull requests:**

- Available spots [\#142](https://github.com/soulcycle/podium-gbp-backend/pull/142) ([achi2211](https://github.com/achi2211))
- Create Pending Account fixes [\#141](https://github.com/soulcycle/podium-gbp-backend/pull/141) ([SebaSOFT](https://github.com/SebaSOFT))
- Confirm spot endpoint [\#140](https://github.com/soulcycle/podium-gbp-backend/pull/140) ([achi2211](https://github.com/achi2211))
- PE-3222 tier into pricing [\#139](https://github.com/soulcycle/podium-gbp-backend/pull/139) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.10.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.10.0) (06-14-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.9.0...0.10.0)

**Merged pull requests:**

- Fix dashboard [\#138](https://github.com/soulcycle/podium-gbp-backend/pull/138) ([achi2211](https://github.com/achi2211))
- \[FEATURE/AUTOMATION\] Slack notifications to travis [\#137](https://github.com/soulcycle/podium-gbp-backend/pull/137) ([mauhftw](https://github.com/mauhftw))
- PE-3254 - Adds loadtest k8s config values and secrets [\#136](https://github.com/soulcycle/podium-gbp-backend/pull/136) ([marksost](https://github.com/marksost))
- PE-3131 user controller refactor [\#127](https://github.com/soulcycle/podium-gbp-backend/pull/127) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.9.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.9.0) (06-14-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.8.0...0.9.0)

**Merged pull requests:**

- Fix login issues [\#135](https://github.com/soulcycle/podium-gbp-backend/pull/135) ([achi2211](https://github.com/achi2211))
- Organizer cancel spot [\#134](https://github.com/soulcycle/podium-gbp-backend/pull/134) ([achi2211](https://github.com/achi2211))

## [0.8.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.8.0) (06-13-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.7.0...0.8.0)

**Merged pull requests:**

- Change reservation [\#133](https://github.com/soulcycle/podium-gbp-backend/pull/133) ([achi2211](https://github.com/achi2211))
- Adding console logging to login procedure [\#132](https://github.com/soulcycle/podium-gbp-backend/pull/132) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.7.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.7.0) (06-13-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.6.0...0.7.0)

**Merged pull requests:**

-  Organizer send invitation link endpoint [\#131](https://github.com/soulcycle/podium-gbp-backend/pull/131) ([achi2211](https://github.com/achi2211))

## [0.6.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.6.0) (06-12-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.5.0...0.6.0)

**Merged pull requests:**

- \[REFACTOR/K8s\] Env vars added [\#130](https://github.com/soulcycle/podium-gbp-backend/pull/130) ([mauhftw](https://github.com/mauhftw))
- fix env variables [\#129](https://github.com/soulcycle/podium-gbp-backend/pull/129) ([achi2211](https://github.com/achi2211))
- Rider claim endpoints [\#128](https://github.com/soulcycle/podium-gbp-backend/pull/128) ([achi2211](https://github.com/achi2211))
- PE-3166 Adds app version to k8s env [\#126](https://github.com/soulcycle/podium-gbp-backend/pull/126) ([ajkamel](https://github.com/ajkamel))
- fix account regions relation bug [\#125](https://github.com/soulcycle/podium-gbp-backend/pull/125) ([achi2211](https://github.com/achi2211))
- Hotfix/fixi accounts seeder [\#124](https://github.com/soulcycle/podium-gbp-backend/pull/124) ([SebaSOFT](https://github.com/SebaSOFT))
- PE-3149 removing the regions table entirelly [\#123](https://github.com/soulcycle/podium-gbp-backend/pull/123) ([SebaSOFT](https://github.com/SebaSOFT))
- -change micro-services url’s [\#122](https://github.com/soulcycle/podium-gbp-backend/pull/122) ([achi2211](https://github.com/achi2211))
- \[REFACTOR/PE-3093\] Simplify migration command [\#119](https://github.com/soulcycle/podium-gbp-backend/pull/119) ([mauhftw](https://github.com/mauhftw))

## [0.5.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.5.0) (06-07-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.4.0...0.5.0)

**Merged pull requests:**

- Dev -\> Master [\#121](https://github.com/soulcycle/podium-gbp-backend/pull/121) ([marksost](https://github.com/marksost))
- DB name and secrets updates [\#120](https://github.com/soulcycle/podium-gbp-backend/pull/120) ([marksost](https://github.com/marksost))
- PE-3002: Email templates replacement [\#118](https://github.com/soulcycle/podium-gbp-backend/pull/118) ([SebaSOFT](https://github.com/SebaSOFT))
- Dev-\>Master [\#117](https://github.com/soulcycle/podium-gbp-backend/pull/117) ([achi2211](https://github.com/achi2211))
- PE-2838/PE-3004/PE-2837 [\#116](https://github.com/soulcycle/podium-gbp-backend/pull/116) ([achi2211](https://github.com/achi2211))
- PE-2739 pricing matrix changes [\#115](https://github.com/soulcycle/podium-gbp-backend/pull/115) ([SebaSOFT](https://github.com/SebaSOFT))
- PE-3005 account creation endpoint [\#113](https://github.com/soulcycle/podium-gbp-backend/pull/113) ([SebaSOFT](https://github.com/SebaSOFT))
- Convert classes date time from studio timezone [\#112](https://github.com/soulcycle/podium-gbp-backend/pull/112) ([achi2211](https://github.com/achi2211))
- CPT Dasbhoard endpoint [\#111](https://github.com/soulcycle/podium-gbp-backend/pull/111) ([achi2211](https://github.com/achi2211))

## [0.4.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.4.0) (05-31-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.3.0...0.4.0)

**Merged pull requests:**

- Dev -\> Master [\#109](https://github.com/soulcycle/podium-gbp-backend/pull/109) ([achi2211](https://github.com/achi2211))
- Fix migrations file [\#108](https://github.com/soulcycle/podium-gbp-backend/pull/108) ([achi2211](https://github.com/achi2211))

## [0.3.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.3.0) (05-31-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.2.0...0.3.0)

**Merged pull requests:**

- PE 2737 class search studio filter [\#110](https://github.com/soulcycle/podium-gbp-backend/pull/110) ([SebaSOFT](https://github.com/SebaSOFT))
- Dev -\> Master [\#107](https://github.com/soulcycle/podium-gbp-backend/pull/107) ([marksost](https://github.com/marksost))
- Fix for lint rule prefer-destructuring causing problems with a constant [\#106](https://github.com/soulcycle/podium-gbp-backend/pull/106) ([SebaSOFT](https://github.com/SebaSOFT))
- Initial FED integration [\#105](https://github.com/soulcycle/podium-gbp-backend/pull/105) ([SebaSOFT](https://github.com/SebaSOFT))
- Add more silkroad information [\#104](https://github.com/soulcycle/podium-gbp-backend/pull/104) ([achi2211](https://github.com/achi2211))
- Add spot number in bikemap [\#103](https://github.com/soulcycle/podium-gbp-backend/pull/103) ([achi2211](https://github.com/achi2211))
- PE-2840 Bike map SilkRoad integration implementation [\#102](https://github.com/soulcycle/podium-gbp-backend/pull/102) ([achi2211](https://github.com/achi2211))
- TITLE: PE-2528 Booking Refactor and backrow integration [\#101](https://github.com/soulcycle/podium-gbp-backend/pull/101) ([achi2211](https://github.com/achi2211))

## [0.2.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.2.0) (05-24-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.1.1...0.2.0)

**Merged pull requests:**

- Dev -\> Master [\#100](https://github.com/soulcycle/podium-gbp-backend/pull/100) ([marksost](https://github.com/marksost))
- Disabling login token temporally [\#99](https://github.com/soulcycle/podium-gbp-backend/pull/99) ([achi2211](https://github.com/achi2211))
- FED Integration features for auth and session management [\#98](https://github.com/soulcycle/podium-gbp-backend/pull/98) ([SebaSOFT](https://github.com/SebaSOFT))

## [0.1.1](https://github.com/soulcycle/podium-gbp-backend/tree/0.1.1) (05-22-2018)
[Full Changelog](https://github.com/soulcycle/podium-gbp-backend/compare/0.1.0...0.1.1)

**Merged pull requests:**

- Dev -\> Master [\#97](https://github.com/soulcycle/podium-gbp-backend/pull/97) ([marksost](https://github.com/marksost))
- Updates k8s declarations. Adds podium env support [\#96](https://github.com/soulcycle/podium-gbp-backend/pull/96) ([marksost](https://github.com/marksost))

## [0.1.0](https://github.com/soulcycle/podium-gbp-backend/tree/0.1.0) (05-22-2018)
**Merged pull requests:**

- Remove firebase environment [\#95](https://github.com/soulcycle/podium-gbp-backend/pull/95) ([achi2211](https://github.com/achi2211))
- PE-2528 - Class Booking service refactor with frontend integration [\#93](https://github.com/soulcycle/podium-gbp-backend/pull/93) ([achi2211](https://github.com/achi2211))
- \[REFACTOR/ CGB-PORTS\] [\#92](https://github.com/soulcycle/podium-gbp-backend/pull/92) ([mauhftw](https://github.com/mauhftw))
- \[FEATURE/PE-2526\] Kubernetes manifests [\#91](https://github.com/soulcycle/podium-gbp-backend/pull/91) ([mauhftw](https://github.com/mauhftw))
- Add complete migration script [\#90](https://github.com/soulcycle/podium-gbp-backend/pull/90) ([achi2211](https://github.com/achi2211))
- \[FEATURE\] Postgresql-client added to dockerfile [\#89](https://github.com/soulcycle/podium-gbp-backend/pull/89) ([mauhftw](https://github.com/mauhftw))
- Add more tests rooms [\#88](https://github.com/soulcycle/podium-gbp-backend/pull/88) ([achi2211](https://github.com/achi2211))
- Add health endpoints [\#87](https://github.com/soulcycle/podium-gbp-backend/pull/87) ([achi2211](https://github.com/achi2211))
- PE-2063 - Class map endpoint integration [\#86](https://github.com/soulcycle/podium-gbp-backend/pull/86) ([achi2211](https://github.com/achi2211))
- PE-2087 & PE-2097 [\#85](https://github.com/soulcycle/podium-gbp-backend/pull/85) ([SebaSOFT](https://github.com/SebaSOFT))
- Change services url [\#84](https://github.com/soulcycle/podium-gbp-backend/pull/84) ([achi2211](https://github.com/achi2211))
- Change w77 url [\#83](https://github.com/soulcycle/podium-gbp-backend/pull/83) ([fernan256](https://github.com/fernan256))
- Fix account info on login [\#82](https://github.com/soulcycle/podium-gbp-backend/pull/82) ([enbits](https://github.com/enbits))
- PE-2113 - Fix - users endpoints [\#81](https://github.com/soulcycle/podium-gbp-backend/pull/81) ([fernan256](https://github.com/fernan256))
- Feature/PE-2067 [\#80](https://github.com/soulcycle/podium-gbp-backend/pull/80) ([enbits](https://github.com/enbits))
- Refactor - settings pricing [\#79](https://github.com/soulcycle/podium-gbp-backend/pull/79) ([fernan256](https://github.com/fernan256))
- Fix - Details in controllers [\#78](https://github.com/soulcycle/podium-gbp-backend/pull/78) ([fernan256](https://github.com/fernan256))
- Refactor/create pending user [\#77](https://github.com/soulcycle/podium-gbp-backend/pull/77) ([enbits](https://github.com/enbits))
- Feature/PE-2070 [\#76](https://github.com/soulcycle/podium-gbp-backend/pull/76) ([enbits](https://github.com/enbits))
- PE-2112 - Feature integration with regions and studios from W77 services. [\#75](https://github.com/soulcycle/podium-gbp-backend/pull/75) ([fernan256](https://github.com/fernan256))
- Remove Foreign Key Constrain [\#74](https://github.com/soulcycle/podium-gbp-backend/pull/74) ([achi2211](https://github.com/achi2211))
- PE-2352 - Refactor, change variable name add organizer relation [\#73](https://github.com/soulcycle/podium-gbp-backend/pull/73) ([fernan256](https://github.com/fernan256))
- PE-2352 - Feature email integration [\#72](https://github.com/soulcycle/podium-gbp-backend/pull/72) ([fernan256](https://github.com/fernan256))
- PE-2061 - Class search endpoint integration [\#71](https://github.com/soulcycle/podium-gbp-backend/pull/71) ([achi2211](https://github.com/achi2211))
- Fix settings controllers [\#70](https://github.com/soulcycle/podium-gbp-backend/pull/70) ([fernan256](https://github.com/fernan256))
-  PE-2090  [\#69](https://github.com/soulcycle/podium-gbp-backend/pull/69) ([enbits](https://github.com/enbits))
- PE-2114 - Refactor, accounts and auth test [\#68](https://github.com/soulcycle/podium-gbp-backend/pull/68) ([fernan256](https://github.com/fernan256))
- Feature/PE-2064 [\#66](https://github.com/soulcycle/podium-gbp-backend/pull/66) ([enbits](https://github.com/enbits))
- Fix validation error when running seeders [\#65](https://github.com/soulcycle/podium-gbp-backend/pull/65) ([fernan256](https://github.com/fernan256))
- PE-2113 - Add new funcitionalities for handling users [\#64](https://github.com/soulcycle/podium-gbp-backend/pull/64) ([fernan256](https://github.com/fernan256))
- PE-2113 - Add new functionalities for managing princing and settigns. [\#63](https://github.com/soulcycle/podium-gbp-backend/pull/63) ([fernan256](https://github.com/fernan256))
- feature/PE-2002 [\#62](https://github.com/soulcycle/podium-gbp-backend/pull/62) ([enbits](https://github.com/enbits))
- Account validation improvement [\#61](https://github.com/soulcycle/podium-gbp-backend/pull/61) ([achi2211](https://github.com/achi2211))
- Feature add global endpoints to list and edit [\#60](https://github.com/soulcycle/podium-gbp-backend/pull/60) ([fernan256](https://github.com/fernan256))
- PE-1955 Logging and specifications [\#59](https://github.com/soulcycle/podium-gbp-backend/pull/59) ([achi2211](https://github.com/achi2211))
- PE-1996 - Setup migration as part of the initialization script [\#58](https://github.com/soulcycle/podium-gbp-backend/pull/58) ([enbits](https://github.com/enbits))
- PE-1998 - Add feature sign out [\#57](https://github.com/soulcycle/podium-gbp-backend/pull/57) ([fernan256](https://github.com/fernan256))
- PE-1999 Set default credit card for account and account refactor [\#56](https://github.com/soulcycle/podium-gbp-backend/pull/56) ([achi2211](https://github.com/achi2211))
- Feature add seeds [\#55](https://github.com/soulcycle/podium-gbp-backend/pull/55) ([fernan256](https://github.com/fernan256))
- Feature/pe 1994 [\#54](https://github.com/soulcycle/podium-gbp-backend/pull/54) ([enbits](https://github.com/enbits))
- PE-1997 - Refactor - Database names [\#53](https://github.com/soulcycle/podium-gbp-backend/pull/53) ([fernan256](https://github.com/fernan256))
- PE-2005 Endpoint to list credit cards for a particular account [\#51](https://github.com/soulcycle/podium-gbp-backend/pull/51) ([achi2211](https://github.com/achi2211))
- List Accounts refactor and fixes  [\#50](https://github.com/soulcycle/podium-gbp-backend/pull/50) ([achi2211](https://github.com/achi2211))
- cpt approves organizer account [\#49](https://github.com/soulcycle/podium-gbp-backend/pull/49) ([enbits](https://github.com/enbits))
- Fix user login controller [\#48](https://github.com/soulcycle/podium-gbp-backend/pull/48) ([fernan256](https://github.com/fernan256))
- PE-1998 - Middleware - Refactor authorization methods [\#46](https://github.com/soulcycle/podium-gbp-backend/pull/46) ([fernan256](https://github.com/fernan256))
- Feature/users helper [\#45](https://github.com/soulcycle/podium-gbp-backend/pull/45) ([enbits](https://github.com/enbits))
- claim spot endpoints [\#44](https://github.com/soulcycle/podium-gbp-backend/pull/44) ([enbits](https://github.com/enbits))
- PE-1829 - Booking Class processing integration [\#43](https://github.com/soulcycle/podium-gbp-backend/pull/43) ([achi2211](https://github.com/achi2211))
- PE-1357 - Pricing Matrix - global and specific prices endpoints, controllers and model [\#42](https://github.com/soulcycle/podium-gbp-backend/pull/42) ([fernan256](https://github.com/fernan256))
- \[FIX\] FIREBASE\_FILE\_NAME env added [\#41](https://github.com/soulcycle/podium-gbp-backend/pull/41) ([mauhftw](https://github.com/mauhftw))
- Fix rebase [\#40](https://github.com/soulcycle/podium-gbp-backend/pull/40) ([fernan256](https://github.com/fernan256))
- PE-1822 Authorize .net payment transaction service integration [\#39](https://github.com/soulcycle/podium-gbp-backend/pull/39) ([achi2211](https://github.com/achi2211))
- Change to use environment variables [\#38](https://github.com/soulcycle/podium-gbp-backend/pull/38) ([fernan256](https://github.com/fernan256))
- \[Fix\] Encrypt firebase credentials [\#37](https://github.com/soulcycle/podium-gbp-backend/pull/37) ([fernan256](https://github.com/fernan256))
- Adds -y to add-apt-repository [\#36](https://github.com/soulcycle/podium-gbp-backend/pull/36) ([mauhftw](https://github.com/mauhftw))
- Ansible scripts added to .travis.yml [\#35](https://github.com/soulcycle/podium-gbp-backend/pull/35) ([mauhftw](https://github.com/mauhftw))
- group reservation and reservations endpoins. [\#34](https://github.com/soulcycle/podium-gbp-backend/pull/34) ([enbits](https://github.com/enbits))
- ansible-vault.sh and decrypt-keys.sh scripts added [\#33](https://github.com/soulcycle/podium-gbp-backend/pull/33) ([mauhftw](https://github.com/mauhftw))
- PE-1817 - Authorize.net payment transaction model [\#32](https://github.com/soulcycle/podium-gbp-backend/pull/32) ([achi2211](https://github.com/achi2211))
- PE-1826: group\_reservation and reservation model [\#31](https://github.com/soulcycle/podium-gbp-backend/pull/31) ([enbits](https://github.com/enbits))
- PE-1367 Credit Card storage service endpoint [\#28](https://github.com/soulcycle/podium-gbp-backend/pull/28) ([achi2211](https://github.com/achi2211))
- PE-1377 - Account settings - global and specific values endpoint [\#27](https://github.com/soulcycle/podium-gbp-backend/pull/27) ([fernan256](https://github.com/fernan256))
- PE-1696 - Create CloudSQL application specific resources [\#26](https://github.com/soulcycle/podium-gbp-backend/pull/26) ([mauhftw](https://github.com/mauhftw))
- search bikes function [\#25](https://github.com/soulcycle/podium-gbp-backend/pull/25) ([enbits](https://github.com/enbits))
- Booking payment logic [\#24](https://github.com/soulcycle/podium-gbp-backend/pull/24) ([enbits](https://github.com/enbits))
- Booking notifications. [\#22](https://github.com/soulcycle/podium-gbp-backend/pull/22) ([enbits](https://github.com/enbits))
- Booking, Price and Card data models [\#21](https://github.com/soulcycle/podium-gbp-backend/pull/21) ([achi2211](https://github.com/achi2211))
- Feature/PE-1371 [\#20](https://github.com/soulcycle/podium-gbp-backend/pull/20) ([enbits](https://github.com/enbits))
- account settings model [\#19](https://github.com/soulcycle/podium-gbp-backend/pull/19) ([enbits](https://github.com/enbits))
- Revert "Feature/pe 1376" [\#18](https://github.com/soulcycle/podium-gbp-backend/pull/18) ([enbits](https://github.com/enbits))
- Feature/pe 1376 [\#16](https://github.com/soulcycle/podium-gbp-backend/pull/16) ([fernan256](https://github.com/fernan256))
- PE-1701 Terraform dir structure changes [\#15](https://github.com/soulcycle/podium-gbp-backend/pull/15) ([mauhftw](https://github.com/mauhftw))
- Feature/pe 1356 rebase [\#13](https://github.com/soulcycle/podium-gbp-backend/pull/13) ([fernan256](https://github.com/fernan256))
- PE-1365 [\#12](https://github.com/soulcycle/podium-gbp-backend/pull/12) ([achi2211](https://github.com/achi2211))
- Transactions model and database table creation. [\#11](https://github.com/soulcycle/podium-gbp-backend/pull/11) ([enbits](https://github.com/enbits))
- PE-1697 - Add dev-build.sh into travis.yml [\#10](https://github.com/soulcycle/podium-gbp-backend/pull/10) ([mauhftw](https://github.com/mauhftw))
- PE-1697 - Adds dev-build.sh job into .travis.yml [\#9](https://github.com/soulcycle/podium-gbp-backend/pull/9) ([mauhftw](https://github.com/mauhftw))
- Fix link of 'for' loops \(rebase on master\) [\#8](https://github.com/soulcycle/podium-gbp-backend/pull/8) ([enbits](https://github.com/enbits))
- Booking data model [\#4](https://github.com/soulcycle/podium-gbp-backend/pull/4) ([enbits](https://github.com/enbits))
- travis.yml added [\#3](https://github.com/soulcycle/podium-gbp-backend/pull/3) ([mauhftw](https://github.com/mauhftw))
- change application version and git client added [\#2](https://github.com/soulcycle/podium-gbp-backend/pull/2) ([mauhftw](https://github.com/mauhftw))
- Initial structure - 1st sprint features  [\#1](https://github.com/soulcycle/podium-gbp-backend/pull/1) ([achi2211](https://github.com/achi2211))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*