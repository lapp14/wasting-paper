import React from "react";
import Head from "next/head";
import { attributes, react as ListContent } from "../content/list.md";

export default function List() {
  const { title, list } = attributes;
  return (
    <>
      <Head>
        <title>The List</title>
      </Head>
      <article>
        <h1>{title}</h1>

        {/* content portion of 'content/list.md' */}
        <ListContent />
        <br />

        {/* editable list portion of 'content/list.md' */}
        <ul>
          {list.map((item, k) => (
            <li key={k}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
