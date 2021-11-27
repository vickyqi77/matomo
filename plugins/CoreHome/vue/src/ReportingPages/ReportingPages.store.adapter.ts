/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

import ReportingPagesStoreInstance from './ReportingPages.store';

angular.module('piwikApp.service').factory('reportingPagesModel', () => ({
  get pages() {
    return ReportingPagesStoreInstance.pages.value;
  },
  findPageInCategory:
    ReportingPagesStoreInstance.findPageInCategory.bind(ReportingPagesStoreInstance),
  findPage: ReportingPagesStoreInstance.findPage.bind(ReportingPagesStoreInstance),
  reloadAllPages: ReportingPagesStoreInstance.reloadAllPages.bind(ReportingPagesStoreInstance),
  getAllPages: ReportingPagesStoreInstance.getAllPages.bind(ReportingPagesStoreInstance),
}));
