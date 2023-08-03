import React from "react";

export default function Documentation() {
    return(
        <div className="docs">
        <h2>Unifying machine learning for eye disease</h2>
        <p>Machine learning provides broad opportunities for clinicians and researchers to resolve the underlying pathology of visual disorders, from RNA microarrays to OCT images. Despite the development of thousands of models and datasets, clinicians and researchers lack a systematic way to examine and implement these systems. The Vision Intelligence Network aims to provide a unified database of deep learning tools for ophthalmology, improving accessibility, explainability, and generalizability throughout the field.</p>
        <h2>Methodology</h2>
        <p>The Vision Intelligence Network (VIN) leverages advances in natural language processing to survey scientific literature for the most recent published reports of machine learning methods in ophthalmology. The reports are processed to extract relevant metadata and code repositories before being archived on VIN. The VIN team also manually reviews entries for accuracy, marking such entries as verified.</p>
        <p>For each entry, the following attributes are cataloged:</p>
        <li><b>Condition</b>:  The primary pathology that the model investigates.</li>
        <li><b>Task:</b>  The primary learning task for the model (object detection, segmentation, forecasting, detection/diagnosis, or imputation).</li>
        <li><b>Model name:</b>  Provided by the author, else defaults to author name.</li>
        <li><b>Description:</b>  Brief description of model, generally the title of the reporting publication.</li>
        <li><b>Model type:</b>  Primary learning algorithm implemented, if available.</li>
        <li><b>Code availability:</b>  Whether code is open-source.</li>
        <li><b>Publication date:</b>  For corresponding paper, if available.</li>
        </div>
    )
}