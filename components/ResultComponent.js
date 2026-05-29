import TestResult from './sub_components/TestResult'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChoiceRadio from './sub_components/ChoiceRadio';
import { api } from '../lib/api';

export default function ResultComponent() {
    const stroke_api = api.stroke;
    const hepatitis_api = api.hepatitis;
    let userEmail = "";
    if (typeof window !== "undefined") {
    userEmail = JSON.parse(localStorage.getItem("Auth")).email;
}
    let [resultsSection, setResultsSection] = useState(0)
    let [strokeResultData, setStrokeResultData] = useState([])
    let [hepatitisResultData, setHepatitisResultData] = useState([])
    let testCount = 0;

    useEffect(() => {
        axios
            .get(stroke_api)
            .then(result => {
                setStrokeResultData(result.data)
            })
            .catch(error => {
                console.log(error)
            })

        axios
            .get(hepatitis_api)
            .then(result => {
                setHepatitisResultData(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);


    if (resultsSection == 0) {
        testCount = 0;
        return (
            <>
                <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
                    {strokeResultData.length > 0 ? <>
                        <h1 class="text-3xl text-center font-bold text-black-500">Your Test Results:</h1>
                        <div class="border-l-2 mt-10">
                            <ChoiceRadio setResultsSection={setResultsSection} />
                            {strokeResultData.map(result => {
                                if (result.email == userEmail) {
                                    testCount++;
                                    return (
                                        <TestResult result={result} testNumber={testCount} />
                                    )
                                }
                            })}
                        </div>
                    </> : <h1 class="text-3xl text-center font-bold text-black-500">No Test Results To Be Viewed Yet.</h1>}
                </div>
            </>
        );
    }
    else if (resultsSection == 1) {
        testCount = 0;
        return (
            <>
                <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
                    {hepatitisResultData.length > 0 ? <>
                        <h1 class="text-3xl text-center font-bold text-black-500">Your Test Results:</h1>
                        <div class="border-l-2 mt-10">
                            <ChoiceRadio setResultsSection={setResultsSection} />
                            {hepatitisResultData.map(result => {
                                if (result.email == userEmail) {
                                    testCount++;
                                    return (
                                        <TestResult result={result} testNumber={testCount} />
                                    )
                                }
                            })}
                        </div>
                    </> : <h1 class="text-3xl text-center font-bold text-black-500">No Test Results To Be Viewed Yet.</h1>}
                </div>
            </>
        );
    }
}