import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleModel from '../SingleModel/SingleModel';

const AiModels = () => {
  const allData = useLoaderData();
  console.log(allData.data.tools);
  return (
    <div className="Dgrid gap-4">
      {allData.data.tools.map((data) => <SingleModel data={data}></SingleModel>)}
    </div>
  );
};

export default AiModels;