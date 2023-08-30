
import AppBar from "@components/AppBar";
import { getDisplayName } from "next/dist/shared/lib/utils";

describe(getDisplayName(AppBar), () => {
    test("some passing test", () => {
        expect(true).toBe(true)
    })
})