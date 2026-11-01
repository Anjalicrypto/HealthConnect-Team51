import { LightningElement, api, wire } from 'lwc';
import { updateRecord, getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickScreeningForm extends LightningElement {
    @api recordId;

@wire(getRecord, {
    recordId: '$recordId',
    fields: ['Health_Assessment__c.Patient__c']
})
assessmentRecord;

get linkedPatientId() {
    return getFieldValue(
        this.assessmentRecord.data,
        'Health_Assessment__c.Patient__c'
    );
}
    patientId = '';
    bloodPressure = '';
    bloodSugar = '';
    symptoms = '';
    isSaving = false;

    handleChange(event) {
        const fieldName = event.target.name;
        this[fieldName] = event.target.value;
    }

    async handleSave() {
        const patientId = this.linkedPatientId;
        const bloodPressure = this.bloodPressure.trim();
        const bloodSugar = Number(this.bloodSugar);

        if (!patientId) {
            this.showToast(
                'Patient Not Found',
                'The current Health Assessment has no linked patient, or the patient information is still loading.',
                'error'
            );
            return;
}
        if (!/^[0-9]{2,3}\/[0-9]{2,3}$/.test(bloodPressure)) {
            this.showToast(
                'Invalid Blood Pressure',
                'Enter blood pressure in the format 120/80.',
                'error'
            );
            return;
        }

        if (!this.bloodSugar || bloodSugar < 1 || bloodSugar > 600) {
            this.showToast(
                'Invalid Blood Sugar',
                'Blood sugar must be between 1 and 600 mg/dL.',
                'error'
            );
            return;
        }

        this.isSaving = true;

        const fields = {
            Id: this.recordId,
            Blood_Pressure__c: bloodPressure,
            Blood_Sugar__c: bloodSugar,
            Symptoms__c: this.symptoms
        };

try {
    await updateRecord({ fields });

            this.showToast(
                'Success',
                'Health Assessment updated successfully!',
                'success'
            );

            this.patientId = '';
            this.bloodPressure = '';
            this.bloodSugar = '';
            this.symptoms = '';

        } catch (error) {
            const message =
                error.body?.message ||
                'Unable to save Health Assessment. Check the object fields and required values.';

            this.showToast('Error', message, 'error');

        } finally {
            this.isSaving = false;
        }
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}
