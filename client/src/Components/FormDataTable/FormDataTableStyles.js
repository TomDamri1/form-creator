import { createStyles } from "@material-ui/core";
import Colors from "../../constants/Colors";

export const generateRowStyle = (id) => id % 2 === 0 ? { backgroundColor: Colors.almostPrimary } : {};
export const styles = createStyles({
    rowButton : {
        textDecoration : "none",
    }
})