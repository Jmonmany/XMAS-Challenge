import { MenuItems } from "../../types/menu";
import { Layout } from "../layout/layout";
import { AppRoutes } from "../routes/app.routes";

export const Items: MenuItems = [
    { path: "/home", label: "Home" },
    { path: "/robots", label: "Roboter" },
    { path: "/bookmarks", label: "Bookmarks" },
];
export function App() {
    return (
        <>
            <Layout>
                <AppRoutes items={Items} ></AppRoutes>
            </Layout>
        </>
    );
}
