import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AdherenceTracking } from './pages/AdherenceTracking';
import { Admin } from './pages/Admin';
import { AiCareplanGenerator } from './pages/AiCareplanGenerator';
import { Alerts } from './pages/Alerts';
import { Analytics } from './pages/Analytics';
import { Appointments } from './pages/Appointments';
import { ClinicalGuidelineEngine } from './pages/ClinicalGuidelineEngine';
import { ConsentSettings } from './pages/ConsentSettings';
import { ConsentVerification } from './pages/ConsentVerification';
import { ContinuousMonitoring } from './pages/ContinuousMonitoring';
import { CvdRisk } from './pages/CVDRisk';
import { Dashboard } from './pages/Dashboard';
import { DiabetesRisk } from './pages/DiabetesRisk';
import { DigitalTwinPage } from './pages/DigitalTwin';
import { Doctor } from './pages/Doctor';
import { Doctors } from './pages/Doctors';
import { Employee } from './pages/Employee';
import { FederatedTraining } from './pages/FederatedTraining';
import { Fhir } from './pages/Fhir';
import { KafkaStreaming } from './pages/KafkaStreaming';
import { Login } from './pages/Login';
import { MedicalRecords } from './pages/MedicalRecords';
import { Models } from './pages/Models';
import { Patient } from './pages/Patient';
import { Patients } from './pages/Patients';
import { PrecisionCare } from './pages/PrecisionCare';
import { Predictions } from './pages/Predictions';
import { Receptionist } from './pages/Receptionist';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { ModuleEmbed } from './pages/ModuleEmbed';
import { MediStorage } from './services/storage';

const DefaultRedirect: React.FC = () => {
  const user = MediStorage.getCurrentUser();
  const token = sessionStorage.getItem('medisphere_token');

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/dashboard" replace />;
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/models" element={<Layout><Models /></Layout>} />
        <Route path="/ml-models" element={<Layout><Models /></Layout>} />
        <Route path="/cvd-risk" element={<Layout><CvdRisk /></Layout>} />
        <Route path="/predictions" element={<Layout><Predictions /></Layout>} />
        <Route path="/diabetes-risk" element={<Layout><DiabetesRisk /></Layout>} />
        <Route path="/continuous-monitoring" element={<Layout><ContinuousMonitoring /></Layout>} />
        <Route path="/alerts" element={<Layout><Alerts /></Layout>} />
        <Route path="/federated-training" element={<Layout><FederatedTraining /></Layout>} />
        <Route path="/patients" element={<Layout><Patients /></Layout>} />
        <Route path="/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/ml-analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/admin" element={<Layout><Admin /></Layout>} />
        <Route path="/doctor" element={<Layout><Doctor /></Layout>} />
        <Route path="/doctors" element={<Layout><Doctors /></Layout>} />
        <Route path="/patient" element={<Layout><Patient /></Layout>} />
        <Route path="/receptionist" element={<Layout><Receptionist /></Layout>} />
        <Route path="/employee" element={<Layout><Employee /></Layout>} />
        <Route path="/appointments" element={<Layout><Appointments /></Layout>} />
        <Route path="/medical-records" element={<Layout><MedicalRecords /></Layout>} />
        <Route path="/fhir" element={<Layout><Fhir /></Layout>} />
        <Route path="/digital-twin" element={<Layout><DigitalTwinPage /></Layout>} />
        <Route path="/twins" element={<Layout><DigitalTwinPage /></Layout>} />
        <Route path="/kafka-streaming" element={<Layout><KafkaStreaming /></Layout>} />
        <Route path="/careplan-generator" element={<Layout><AiCareplanGenerator /></Layout>} />
        <Route path="/careplans" element={<Layout><AiCareplanGenerator /></Layout>} />
        <Route path="/consent-settings" element={<Layout><ConsentSettings /></Layout>} />
        <Route path="/consent-verification" element={<Layout><ConsentVerification /></Layout>} />
        <Route path="/clinical-guidelines" element={<Layout><ClinicalGuidelineEngine /></Layout>} />
        <Route path="/adherence-tracking" element={<Layout><AdherenceTracking /></Layout>} />
        <Route path="/precision-care" element={<Layout><PrecisionCare /></Layout>} />
        <Route path="/prediction-care" element={<Layout><PrecisionCare /></Layout>} />
        <Route path="/patient-360" element={<Layout><PrecisionCare section="patient" /></Layout>} />
        <Route path="/personalized-intervention" element={<Layout><PrecisionCare section="intervention" /></Layout>} />
        <Route path="/clinical-guideline-compliance" element={<Layout><PrecisionCare section="guidelines" /></Layout>} />
        <Route path="/outcomes" element={<Layout><PrecisionCare section="outcomes" /></Layout>} />
        <Route path="/provider-collaboration" element={<Layout><PrecisionCare section="collaboration" /></Layout>} />
        <Route path="/team-c/fhir-validation" element={<Layout><ModuleEmbed src="/team-c/modules/m1/fhir-validation.html" title="FHIR Validation" team="C" /></Layout>} />
        <Route path="/team-c/patient-consent" element={<Layout><ModuleEmbed src="/team-c/modules/m1/patient-consent.html" title="Patient Consent Verification" team="C" /></Layout>} />
        <Route path="/team-c/audit-logs" element={<Layout><ModuleEmbed src="/team-c/modules/m1/audit-logs.html" title="HIPAA Audit Logs" team="C" /></Layout>} />
        <Route path="/team-c/model-accuracy" element={<Layout><ModuleEmbed src="/team-c/modules/m2/model-accuracy.html" title="Model Accuracy" team="C" /></Layout>} />
        <Route path="/team-c/federated-convergence" element={<Layout><ModuleEmbed src="/team-c/modules/m2/federated-convergence.html" title="Federated Convergence" team="C" /></Layout>} />
        <Route path="/team-c/shap-validity" element={<Layout><ModuleEmbed src="/team-c/modules/m2/shap-validity.html" title="SHAP Validity" team="C" /></Layout>} />
        <Route path="/team-c/alert-fatigue-prevention" element={<Layout><ModuleEmbed src="/team-c/modules/m3/alert-fatigue-prevention.html" title="Alert Fatigue Prevention" team="C" /></Layout>} />
        <Route path="/team-c/anomaly-detection-precision" element={<Layout><ModuleEmbed src="/team-c/modules/m3/anomaly-detection-precision.html" title="Anomaly Detection Precision" team="C" /></Layout>} />
        <Route path="/team-c/vitals-range-validation" element={<Layout><ModuleEmbed src="/team-c/modules/m3/vitals-range-validation.html" title="Vitals Range Validation" team="C" /></Layout>} />
        <Route path="/team-c/careplan-safety-checks" element={<Layout><ModuleEmbed src="/team-c/modules/m4/careplan-safety-checks.html" title="Careplan Safety Checks" team="C" /></Layout>} />
        <Route path="/team-c/clinical-guideline-compliance" element={<Layout><ModuleEmbed src="/team-c/modules/m4/clinical-guideline-compliance.html" title="Clinical Guideline Compliance" team="C" /></Layout>} />
        <Route path="/team-c/drug-interaction-validation" element={<Layout><ModuleEmbed src="/team-c/modules/m4/drug-interaction-validation.html" title="Drug Interaction Validation" team="C" /></Layout>} />
        <Route path="/team-d/rbac" element={<Layout><ModuleEmbed src="/team-c/modules/d/m1/rbac.html" title="RBAC" team="D" /></Layout>} />
        <Route path="/team-d/twin-data-completeness" element={<Layout><ModuleEmbed src="/team-c/modules/d/m1/twin-data-completeness.html" title="Twin Data Completeness" team="D" /></Layout>} />
        <Route path="/team-d/vitals-range-validation" element={<Layout><ModuleEmbed src="/team-c/modules/d/m1/vitals-range-validation.html" title="Vitals Range Validation" team="D" /></Layout>} />
        <Route path="/team-d/bias-audit" element={<Layout><ModuleEmbed src="/team-c/modules/d/m2/bias-audit.html" title="Bias Audit" team="D" /></Layout>} />
        <Route path="/team-d/clinical-guidelines-compliance" element={<Layout><ModuleEmbed src="/team-c/modules/d/m2/clinical-guidelines-compliance.html" title="Clinical Guidelines Compliance" team="D" /></Layout>} />
        <Route path="/team-d/prediction-calibration" element={<Layout><ModuleEmbed src="/team-c/modules/d/m2/prediction-calibration.html" title="Prediction Calibration" team="D" /></Layout>} />
        <Route path="/team-d/acknowledgment-tracking" element={<Layout><ModuleEmbed src="/team-c/modules/d/m3/acknowledgment-tracking.html" title="Acknowledgment Tracking" team="D" /></Layout>} />
        <Route path="/team-d/alert-routing" element={<Layout><ModuleEmbed src="/team-c/modules/d/m3/alert-routing.html" title="Alert Routing" team="D" /></Layout>} />
        <Route path="/team-d/false-alert-rate" element={<Layout><ModuleEmbed src="/team-c/modules/d/m3/false-alert-rate.html" title="False Alert Rate" team="D" /></Layout>} />
        <Route path="/team-d/adherence-calculation-accuracy" element={<Layout><ModuleEmbed src="/team-c/modules/d/m4/adherence-calculation-accuracy.html" title="Adherence Calculation Accuracy" team="D" /></Layout>} />
        <Route path="/team-d/outcome-tracking-integrity" element={<Layout><ModuleEmbed src="/team-c/modules/d/m4/outcome-tracking-integrity.html" title="Outcome Tracking Integrity" team="D" /></Layout>} />
        <Route path="/team-d/provider-approval-workflow" element={<Layout><ModuleEmbed src="/team-c/modules/d/m4/provider-approval-workflow.html" title="Provider Approval Workflow" team="D" /></Layout>} />
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        <Route path="*" element={<DefaultRedirect />} />
      </Routes>
    </HashRouter>
  );
}
