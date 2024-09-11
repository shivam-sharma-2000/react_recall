import CardListGroup from "../CardListGroup";
import './Body.css'

function Body() {
    const latestMovies: string[] = [
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjcsIFNlcCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310216-pxzjbvewvz-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00357490-jjwckjgkqp-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjUsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383474-zvygtyjgnp-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379391-ezhhvjsnsa-portrait.jpg",
    ];
    const watchedMovies: string[] = [
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjcsIFNlcCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310216-pxzjbvewvz-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00357490-jjwckjgkqp-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjUsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383474-zvygtyjgnp-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00379391-ezhhvjsnsa-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTEsIE9jdCAyMDI0,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00328827-fxgkkxgcjd-portrait.jpg",
    ];
    return <div className="body-content">
        <div className="ms-5 starting-content">
            <h3 className="text-light ">Trending Movies</h3>
            <CardListGroup items={latestMovies} />
        </div>
        <div style={{ height: "15vw" }} />
        <div className=" ms-5">
            <h3 className="text-light ">Recently Watched</h3>
            <CardListGroup items={watchedMovies} />
        </div>
    </div>
}

export default Body;