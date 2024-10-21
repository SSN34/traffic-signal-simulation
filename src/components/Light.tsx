interface LightProps {
    direction: string;
    color: "red" | "yellow" | "green";
}

export enum LightColors {
    Red = "red",
    Yellow = "yellow",
    Green = "green",
}

function Light(props: LightProps) {
    let { direction, color } = props;

    return (
        <div className={`light-container ${direction}`}>
            <div className={`light red ${color === "red" ? "on" : "off"}`}></div>
            <div className={`light yellow ${color === "yellow" ? "on" : "off"}`}></div>
            <div className={`light green ${color === "green" ? "on" : "off"}`}></div>
        </div>
    );
}

export default Light;
