import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

// We only want to render the content, so disable
// the `_app.tsx` template as well as any potentially
// inherited layouts
export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default defineRoute(async (_, ctx) => {
  const content = await loadContent(ctx.params.panel);

  // Only render the new content
  return (
    <Partial name="panel">
      {content}
    </Partial>
  );
});

function loadContent(panel: string) {
  // Simulate loading content based on the panel ID
  switch (panel) {
    case "panel1":
      return <div>Content for Panel 1</div>;
    case "panel2":
      return <div>Content for Panel 2</div>;
    case "panel3":
      return <div>Content for Panel 3</div>;
    default:
      return <div>Default Content</div>;
  }
}
