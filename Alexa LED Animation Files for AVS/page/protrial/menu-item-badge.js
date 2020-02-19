/*eslint-disable */
document.addEventListener('DOMContentLoaded', function () {
  var ADDON_KEY = 'com.atlassian.plugin.automation.jira-automation-plugin';
  var DATA_KEY = ADDON_KEY + ':automation-lite-trial-menu-item-badge.pro-menu-badge-visible';
  var shouldShow = WRM.data.claim(DATA_KEY);
  if (shouldShow) {
    var menuItem = document.getElementById('automation_project_admin');
    if (menuItem) {
      const lozenge = document.createElement('span');
      lozenge.className = 'aui-lozenge aui-lozenge-subtle aui-lozenge-complete';
      lozenge.style = 'margin-left: 5px;';
      lozenge.innerText = 'New';
      menuItem.appendChild(lozenge);
    }
  }
});
