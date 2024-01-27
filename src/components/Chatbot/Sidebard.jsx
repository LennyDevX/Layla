const SidebarItem = ({ children }) => (
    <li className="hover:bg-blue-900 p-2 rounded-lg">
        {children}
    </li>
);

const Sidebar = () => {
    return (
        <div className="w-1/2 h-full bg-black text-white p-6 rounded shadow-md">
            <ul className="space-y-4 px-1 mx-4">
                <SidebarItem>Elemento 1</SidebarItem>
                <SidebarItem>Elemento 2</SidebarItem>
                <SidebarItem>Elemento 3</SidebarItem>
                <SidebarItem>Elemento 4</SidebarItem>
                <SidebarItem>Elemento 2</SidebarItem>
                <SidebarItem>Elemento 3</SidebarItem>
                <SidebarItem>Elemento 4</SidebarItem>
            </ul>
        </div>
    );
};

export default Sidebar;