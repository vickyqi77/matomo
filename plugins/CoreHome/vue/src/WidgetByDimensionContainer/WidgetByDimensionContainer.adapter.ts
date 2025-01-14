/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

import createAngularJsAdapter from '../createAngularJsAdapter';
import WidgetByDimensionContainer from './WidgetByDimensionContainer.vue';

export default createAngularJsAdapter({
  component: WidgetByDimensionContainer,
  scope: {
    widgets: {
      angularJsBind: '=piwikWidgetByDimensionContainer',
      transform(v) {
        return v.widgets;
      },
    },
  },
  directiveName: 'piwikWidgetByDimensionContainer',
});
