import React from "react";
import { useLoaderData } from "react-router-dom";

const Description = () => {
  const singleData = useLoaderData();
  console.log(singleData);

  const showFeatures = (data) => {
    let array = [];
    // if (!data) {
    //   return [];
    // }
    for (let item in data) {
      array.push(data[item].feature_name);
    }
    return array;
  };

  const {
    id,
    description,
    features,
    input_output_examples,
    image_link,
    pricing,
    integrations,
  } = singleData.data;

  console.log([features]);

  return (
    <div className="flex mx-10 lg:max-w-7xl lg:mx-auto justify-center my-10">
      <div className="card lg:card-side bg-gradient-to-r from-rose-100 to-teal-100 shadow-xl">
        <figure>
          <img
            className="rounded-lg"
            src={image_link[0]}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center text-3xl font-bold">
            {description}
          </h2>
          <div className="text-center my-5">
            <p className="font-bold mb-4 text-2xl text-slate-700">
              {input_output_examples[0].input}
            </p>
            <p className="text-gray-600 text-xl">
              {input_output_examples[0].output}
            </p>
          </div>
          <div className="flex justify-around mt-4">
            <div>
              <h2 className="text-2xl text-gray-700 font-semibold mb-2">
                Features
              </h2>
              <ol className="list-disc ml-5">
                {/* {Object.keys(features).forEach(function (feature_name) {
                  <li>{features[feature_name].feature_name}</li>;
                  console.log(features[feature_name].feature_name);
                })} */}
                {showFeatures(features).map((feature) => (
                  <li>{feature}</li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl text-gray-700 font-semibold mb-2">
                Integration
              </h2>
              <ol className="list-disc ml-5">
                {integrations.map((integration) => (
                  <li>{integration}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
