import { http } from "msw";
import { shoppingLists } from "~/mocks/fixtures/list";

export const ListHandlers = [
  http.get("/api/shoplist", async () => {
    return Response.json({
      shoppingLists,
    });
  }),
];
