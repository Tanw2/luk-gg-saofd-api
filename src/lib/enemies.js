// import DT_EnemyData.json from "game\client\Content\Product\DataTable\DT_EnemyData.json" // contains base enemy string IDS
import DT_EnemyData from "../../game/client/Content/Product/DataTable/DT_EnemyData.json"
import en from "../../game/client/Content/Localization/Game/en/Game.json";
import DT_BattleCharacterConstStatusData from "../../game/client/Content/Product/DataTable/DT_BattleCharacterConstStatusData.json";

import { getBriefArr } from "./utils/index.js";

const entries = await Promise.all(
    Object.entries(DT_BattleCharacterConstStatusData[0].Rows)
        // Filter out the characters 
        .filter(([key]) => key.includes("ENEMY") || key.includes("BOSS") || key.includes("RBOSS"))
        .map(async ([key, baseStats]) => {
            const enemyId = key;
            // const name = en.ST_SevenUI[`CharaName_${charId}`].replace('{Change}|index(\"Nautilus\",\"Eiji\")', "Eiji");
            

            return {
                id:enemyId,
                baseStats,
                
            };
        })
)

export const entries_brief = getBriefArr(entries)

export default entries




