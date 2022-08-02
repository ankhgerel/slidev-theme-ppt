import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "../**/*.{vue,ts}")],
  },
  shortcuts: {
    // custom the default background
    "bg-main": "bg-white text-[#000] dark:(bg-[#0d1117] text-[#fff])",
  },
}));
