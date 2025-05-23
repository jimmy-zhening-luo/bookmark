chrome
  .runtime
  .onInstalled
  .addListener(() => {
    void chrome.action.setBadgeText({
      text: "OFF",
    });
  });
chrome
  .action
  .onClicked
  .addListener(async tab => {
    const prevState = await chrome
      .action
      .getBadgeText(
        { tabId: tab.id },
      )
      .catch(
        (e: unknown) => console.error(e),
      );

    await chrome
      .action
      .setBadgeText({
        tabId: tab.id,
        text: prevState === "ON" ? "OFF" : "ON",
      })
      .catch((e: unknown) => console.error(e));
  });
