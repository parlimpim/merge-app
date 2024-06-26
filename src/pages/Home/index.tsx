import { useState, useMemo, useCallback } from "react";

// components
import TextField from "../../components/textField";
import Button from "../../components/button";

// utils
import { isAscSort, isDescSort, stringToListOfNumber, mergeSortedArray } from "../../utils";
import { DEFAULT } from "../../utils/constants";
import en from "../../utils/en";

import "./styles.scss";

const { HOME: {
  TITLE,
  ARRAY_1,
  ARRAY_2,
  ARRAY_3,
  USE_DEFAULT,
  CLEAR,
  MERGE,
  ASC_PLACEHOLDER,
  DESC_PLACEHOLDER,
  RESULT,
  ERROR,
}, ERROR: { INCORRECT, NOT_SORTED } } = en;

const Home = () => {
  const [array1, setArray1] = useState<string>("");
  const [array2, setArray2] = useState<string>("");
  const [array3, setArray3] = useState<string>("");
  const [mergedArray, setMergedArray] = useState<number[]>([]);
  const [error, setError] = useState<string>("");

  const handleMerge = useCallback(() => {
    // convert string to list of number
    const nums1 = stringToListOfNumber(array1);
    const nums2 = stringToListOfNumber(array2);
    const nums3 = stringToListOfNumber(array3);

    if (!nums1 || !nums2 || !nums3) {
      setMergedArray([]);
      setError(INCORRECT);
    } else if (!isDescSort(nums1) || !isAscSort(nums2) || !isAscSort(nums3)) {
      // check whether each array already sort or not
      setMergedArray([]);
      setError(NOT_SORTED);
    } else {
      // merge
      const sortedNums = mergeSortedArray(nums1.slice().reverse(), nums2, nums3);
      setMergedArray(sortedNums);
      setError("");
    }
        
  }, [array1, array2, array3]);

  const handleClear = useCallback(() => {
    setArray1("");
    setArray2("");
    setArray3("");
    setMergedArray([]);
    setError("");
  }, []);

  const setDefaultValue = useCallback(() => {
    setArray1(DEFAULT.ARRAY_1);
    setArray2(DEFAULT.ARRAY_2);
    setArray3(DEFAULT.ARRAY_3);
    setMergedArray([]);
    setError("");
  }, []);

  const isDiabledMerge = useMemo(() => {
    return !array1 || !array2 || !array3;
  }, [array1, array2, array3]);

  return (
    <div className="home">
      <div className="home__title">{TITLE}</div>
      <div className="home__input">
        <TextField
          id="array1"
          value={array1}
          label={ARRAY_1}
          placeholder={DESC_PLACEHOLDER}
          onChange={setArray1}
        />
        <TextField
          id="array2"
          value={array2}
          label={ARRAY_2}
          placeholder={ASC_PLACEHOLDER}
          onChange={setArray2}
        />
        <TextField
          id="array3"
          value={array3}
          label={ARRAY_3}
          placeholder={ASC_PLACEHOLDER}
          onChange={setArray3}
        />
      </div>
      <div className="home__actions">
        <Button secondary id="use-default" onClick={setDefaultValue}>
          <div>{USE_DEFAULT}</div>
        </Button>
        <Button secondary id="clear" onClick={handleClear}>
          <div>{CLEAR}</div>
        </Button>
        <Button id="merge" disabled={isDiabledMerge} onClick={handleMerge}>
          <div>{MERGE}</div>
        </Button>
      </div>
      {!!mergedArray.length && (
        <div className="home__result">
          <div className="title">{RESULT}</div>
          <div className="value">
            {mergedArray.map((num: number) => (
              <div key={num} className="item">{num}</div>
            ))}
          </div>
        </div>
      )}
      {error && (
        <div className="home__error">
          <div className="title">{ERROR}</div>
          <div>{error}</div>
        </div> 
      )}
    </div>
  );
};

export default Home;
