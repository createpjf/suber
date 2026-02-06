chrome.runtime.onInstalled.addListener(() => {
  console.log('SubReminder installed')

  chrome.alarms.create('daily-billing-check', {
    periodInMinutes: 1440,
  })
})

// Enable side panel: clicking the extension icon opens the side panel
// instead of a popup, so it persists across tab/page switches
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error('Failed to set side panel behavior:', error))

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'daily-billing-check') {
    console.log('Daily billing check alarm fired')
  }
})
