"use client"
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { open, close } from "@/store/slices/isOpenSlice";
import DragCloseDrawer from "@/components/DrageCloseDrawer";
function SidebarModal() {

    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    return (
        <div className="relative">

            <DragCloseDrawer open={isOpen} setOpen={(state) => (state ? dispatch(open()) : dispatch(close()))}>
                <aside>
                    sidebar
                </aside>
            </DragCloseDrawer>
        </div>
    )
}

export default SidebarModal
