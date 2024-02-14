type ScreenTitle = "small" | "medium" | "large";
export function getTimelineStart(screenWidth: number): {
  startString: string;
  screenTitle: ScreenTitle;
} {
  switch (true) {
    case screenWidth < 576:
      return { startString: "-500% top", screenTitle: "small" };
    case screenWidth >= 576 && screenWidth < 992:
      return { startString: "-250% top", screenTitle: "medium" };
    default:
      return { startString: "-50% top", screenTitle: "large" };
  }
}
