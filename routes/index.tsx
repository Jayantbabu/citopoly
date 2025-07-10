import GameBoard from "../components/GameBoard.tsx";
import ChatPanel from "../components/ChatPanel.tsx";
import PlayersPanel from "../components/PlayersPanel.tsx";
import TradesPanel from "../components/TradesPanel.tsx";
import { Partial } from "$fresh/runtime.ts";

export default function Home() {

  //const panelNum = Number(ctx.params.panel) || 1;
  /*let PanelComp;
  if (panelNum === 2) PanelComp = PlayersPanel;
  else if (panelNum === 3) PanelComp = TradesPanel;
  else PanelComp = ChatPanel;*/

  return (
    <div class="min-h-screen bg-[#222]">
      {/* Desktop layout: flex row, 80/20 split */}
      <div class="hidden lg:flex flex-row gap-8 p-8">
        <div class="flex-[8_1_0] flex items-center justify-center">
          <GameBoard />
        </div>
        <div class="flex-[2_1_0] flex flex-col gap-4">
          <ChatPanel />
          <PlayersPanel />
          <TradesPanel />
        </div>
      </div>
      {/* Mobile layout: board on top, tabs below */}
      <div class="flex flex-col lg:hidden p-4">
        <div class="w-full max-w-xl mx-auto mb-4">
          <GameBoard />
        </div>
        <div class="flex gap-2 mb-4 w-full max-w-xl mx-auto">
          <a href="/panel1" f-partial="/partials/panel1"
            class={`flex-1 text-center rounded-t-lg px-4 py-2 font-medium `}>
            Panel 1
          </a>
          <a href="/panel2" f-partial="/partials/panel2"
            class={`flex-1 text-center rounded-t-lg px-4 py-2 font-medium`}>
            Panel 2
          </a>
          <a href="/panel3" f-partial="/partials/panel3"
            class={`flex-1 text-center rounded-t-lg px-4 py-2 font-medium`}>
            Panel 3
          </a>
        </div>
        <div class="w-full max-w-xl mx-auto">
          <Partial name="panel">
            <div>This is the first view of the panel</div>
          </Partial>
        </div>
      </div>
    </div>
  );
}