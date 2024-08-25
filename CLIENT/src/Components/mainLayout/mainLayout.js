import { useState } from 'react';
import './mainLayout.css';
import GeneralSecton from '../generalSection/GeneralSection';
import PedalsSection from '../pedalsSection/PedalsSection';

function MainLayout() {
    let mainLayoutGrid =
        '[row1-start] "part1 part1 part2 part2 part2" auto [row1-end] \
         [row2-start] "part1 part1 part2 part2 part2" auto [row2-end] \
         [row3-start] ". part3 part3 part4 part4" auto [row3-end] \
         [row4-start] "part5 part5 part5 part4 part4" auto [row4-end] \
         [row5-start] "part5 part5 part5 part4 part4 " auto [row5-end] \
         / auto auto auto auto auto';

    // const sectionsEnum = enumsStore.dataSections;
    // const [generalData, setGeneralData] = useState({});

    // const onUpdateData = (data) => {
    //     switch (data.section) {
    //         case sectionsEnum.general:
    //             setGeneralData({ ...generalData, [data.name]: data.value });
    //     }
    // };

    // addEvetnLisiner("update_data", console.log)

    return (
        <div className="mainLayout" style={{ gridTemplate: mainLayoutGrid, gap: "3%" }}>
            <GeneralSecton gridArea={"part1"} />
            <PedalsSection gridArea={'part3'} />
            {/* <BaseWindow gridArea={'part2'} shadowColor={"DC9544"}/>
            <BaseWindow gridArea={'part4'} shadowColor={"009B8B"}/>
            <BaseWindow gridArea={'part5'} shadowColor={"FC3CC8"}/> */}
        </div>
    );
}

export default MainLayout;
