export interface IGrid {
    _id: string;
    name: string;
    authorId: string;
    highVoltageTransmission: number;
    highVoltageAccess: number;
    
    middleVoltageTransmissionBusiness: number;
    middleVoltageAccessBusiness: number;
    lowVoltageTransmissionBusiness: number;
    lowVoltageAccessBusiness: number;

    middleVoltageTransmission: number;
    middleVoltageAccess: number;
    lowVoltageTransmission: number;
    lowVoltageAccess: number;
}