import { useState, useMemo, useCallback } from "react";
import TextField from "../../components/textField";
import Button from "../../components/button";
import en from "../../utils/en";
import { isAscSort, isDescSort, stringToListOfNumber, mergeSort } from "../../utils";
import "./styles.scss";

const { HOME: {
    COLLECTION_1,
    COLLECTION_2,
    COLLECTION_3,
    USE_DEFAULT_VALUE,
    CLEAR,
    MERGE,
    ASC_PLACEHOLDER,
    DESC_PLACEHOLDER,
} } = en;

const Home = () => {
    const [collection1, setCollections1] = useState<string>("");
    const [collection2, setCollections2] = useState<string>("");
    const [collection3, setCollections3] = useState<string>("");
    const [sortedCollection, setSortedCollection] = useState<string>("");

    const handleMerge = useCallback(() => {
        // convert string to list of number
        const nums1 = stringToListOfNumber(collection1);
        const nums2 = stringToListOfNumber(collection2);
        const nums3 = stringToListOfNumber(collection3);

        if (!nums1 || !nums2 || !nums3) {
            console.log('error')
            return
        } else if (!isDescSort(nums1) || !isAscSort(nums2) || !isAscSort(nums3)) {
            // check whether each array already sort or not
            console.log('not sort')
            return
        } else {
            const sortedNums = mergeSort(nums1, nums2, nums3);
            setSortedCollection(sortedNums.join(", "));
        }
        
    }, [collection1, collection2, collection3])

    const isDiabledMerge = useMemo(() => {
      return !collection1 || !collection2 || !collection3;
    }, [collection1, collection2, collection3])

    return (
      <div className="home">
        <div className="home__input">
            <TextField value={collection1} label={COLLECTION_1} placeholder={DESC_PLACEHOLDER} onChange={setCollections1} />
            <TextField value={collection2} label={COLLECTION_2} placeholder={ASC_PLACEHOLDER} onChange={setCollections2} />
            <TextField value={collection3} label={COLLECTION_3} placeholder={ASC_PLACEHOLDER} onChange={setCollections3} />
        </div>
        <div className="home__actions">
            <Button secondary onClick={() => { console.log('use default') }}>
                <div>{USE_DEFAULT_VALUE}</div>
            </Button>
            <Button secondary onClick={() => { console.log('clear') }}>
                <div>{CLEAR}</div>
            </Button>
            <Button disabled={isDiabledMerge} onClick={handleMerge}>
                <div>{MERGE}</div>
            </Button>
        </div>
        <div className="home__result">
            {sortedCollection && (
                <div>
                    <div>Result</div>
                    {sortedCollection}
                </div>
            )}
        </div>
      </div>
    )
}

export default Home;