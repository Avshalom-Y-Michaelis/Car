import { useState } from 'react';
import './gaugesPage.css';
import GeneralSecton from '../../Components/generalSection/GeneralSection';
import PedalsSection from '../../Components/pedalsSection/PedalsSection';

function GaugesPage() {
    // let mainLayoutGrid =
    //     '[row1-start] "general general general ." auto [row1-end] \
    //      [row2-start] "general general general ." auto [row2-end] \
    //      [row3-start] "general general general ." auto [row3-end] \
    //      [row4-start] ". . engion engion" auto [row4-end] \
    //      [row5-start] ". . engion engion" auto [row5-end] \
    //      / auto auto auto';
        let mainLayoutGrid =
        '[row1-start] ". . engion engion" auto [row1-end] \
         [row2-start] ". . engion engion" auto [row2-end] \
         [row3-start] "general general general ." auto [row3-end] \
         [row4-start] "general general general ." auto [row4-end] \
         [row5-start] "general general general ." auto [row5-end] \
         / auto auto auto';
    // let mainLayoutGrid =
    //     '[row1-start] "part1 part1 part2 part2 part2" auto [row1-end] \
    //      [row2-start] "part1 part1 part2 part2 part2" auto [row2-end] \
    //      [row3-start] ". part3 part3 part4 part4" auto [row3-end] \
    //      [row4-start] "part5 part5 part5 part4 part4" auto [row4-end] \
    //      [row5-start] "part5 part5 part5 part4 part4 " auto [row5-end] \
    //      / auto auto auto auto auto';

    return (
        <div className="mainLayout" style={{ gridTemplate: mainLayoutGrid, gap: '3%' }}>
            <GeneralSecton gridArea={'general'} />
            <PedalsSection gridArea={'engion'} /> 
            {/* <BaseWindow gridArea={'part2'} shadowColor={"DC9544"}/>
            <BaseWindow gridArea={'part4'} shadowColor={"009B8B"}/>
            <BaseWindow gridArea={'part5'} shadowColor={"FC3CC8"}/> */}
        </div>
    );
}

export default GaugesPage;
