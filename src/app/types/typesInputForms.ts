export type InputType = 'text' | 'password' | 'email' | 'tel';
export type ChekboxType = 'radio' | 'checkbox'

export interface InputFormsInterface{
    labelName: string,
    type:InputType,
    placeholder: string,
    required:boolean,
}

export interface ChekboxFormsInterface{
    labelName: string,
    type:ChekboxType,
    required:boolean,
}