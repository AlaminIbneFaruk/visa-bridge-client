import { useEffect, useState } from "react";

const placeholderVisas = Array(6).fill({
  country: "Country Name",
  countryImage: "", // You can add a placeholder image URL here
  visaType: "Visa Type",
  fee: "-",
  validity: "-",
  processingTime: "-",
  required_documents: "All required documents",
  Application_method: "Application method",
  Age_Restriction: "None",
});

const VisaHome = () => {
  const [visas, setVisas] = useState(null);

  useEffect(() => {
    fetch("/visaInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
      });
  }, []);

  return (
    <div className="container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-12">
      {(visas ? visas : placeholderVisas).map((visa, idx) => (
        <div className="card w-full bg-base-100 shadow-xl lg:p-0 p-5" key={idx}>
          <figure>
            <img
              src={visa.countryImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADACAYAAAAtDX72AAAAAXNSR0IArs4c6QAAD2RJREFUeF7tndeS47oORdWTc845x///i3mdnHPOOfap7Sp2cTCUREpqH9lYqprqc69lSljAJkGQkhcuXbq0WHFAAAJzTWABoc+1fzEOAhMCCJ1AgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAgidGICAAwII3YGTMRECCJ0YgIADAgjdgZMxEQIInRiAgAMCCN2BkzERAjMl9G3btlU7d+6sNm7cWK1atapaWFiYeHBxcbH6/ft39eXLl+rNmzfV69evsz177NixSZulx8ePH6sbN260fm3z5s3V7t27q02bNv1zzz9//qw+fPhQPX/+vPr27VtrW/Nywrp166oTJ05U69evr8Tg7t27lXiWHGvWrKn27NlTbd26tdJ/r1ixYikWAtenT59WP378KGm2kr927dq15K/QrhpRjMlPirEXL14Utft/nzwTQldgHD58eOKEIO4mcJ8/f64ePnxY6W/bcebMmUm7pUeb0FeuXFkdOXKkUucUB0vqOn/+/JkEz6NHjybB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"}
              alt={visa.country}
              className="w-full h-full lg:h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {visa.country}
              <div className="badge badge-accent">{visa.visaType}</div>
            </h2>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Fee</div>
                <div className="stat-value text-primary">৳{visa.fee}</div>
              </div>
              <div className="stat ">
                <div className="stat-title">Validity</div>
                <div className="stat-value">{visa.validity} days</div>
              </div>
              <div className="stat">
                <div className="stat-title">Processing</div>
                <div className="stat-value">{visa.processingTime} days</div>
              </div>
            </div>
            <p>
              <strong>Required Documents:</strong> {visa.required_documents}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{visa.Application_method}</div>
              <div className="badge badge-outline">
                {visa.Age_Restriction ? `${visa.Age_Restriction}+ years` : "None"}
              </div>
            </div>
            <div>
              <button className="btn btn-primary font-bold">See Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisaHome;
