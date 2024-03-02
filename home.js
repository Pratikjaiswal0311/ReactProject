import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useEffect, useState } from "react";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import BootstrapTable from "react-bootstrap-table-next";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/comments").then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    const columns = [
        {
            dataField: "name",
            text: "Name",
            filter: textFilter()
        },
        {
            dataField: "email",
            text: "Email",
            filter: textFilter()
        },
        {
            dataField: "postId",
            text: "Post ID",
            filter: textFilter()
        }
    ];

    return (
        <div>
            <BootstrapTable
                keyField="id"
                data={data}
                columns={columns}
                striped
                hover
                condensed
                pagination={paginationFactory()}
                filter={filterFactory()}
            />
        </div>
    );
};

export default Home;
