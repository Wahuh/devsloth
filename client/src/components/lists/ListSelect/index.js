import React, { useEffect } from "react";
import Select from "../../reuse/Select";
import styles from "./ListSelect.scss";
import ListOption from "../duck/ListOption";

const ListSelect = ({ listIds, onSelect, value }) => {
    useEffect(() => {
        onSelect(listIds[0]);
    }, []);
    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        onSelect(value);
    }
    return (
        <section className={styles.ListSelectBar}>
            <Select onChange={handleChange} value={value}>
                {listIds.map(id => <ListOption key={id} listId={id} />)}
            </Select>
        </section>
    );
}

export default ListSelect;