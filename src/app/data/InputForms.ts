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



export const contactInputForm: InputFormsInterface[] = [
    { labelName: 'First Name*',type:"text",placeholder: "Your first name",required:true,},
    { labelName: 'Last Name*',type:"text",placeholder: "Your last name",required:true,},
    { labelName: 'Email*',type:"text",placeholder: "Your working email",required:true,},
    { labelName: 'Phone',type:"tel",placeholder: "You phone number",required:false,},
] 

export const contactMessageInput: InputFormsInterface =     
    { labelName: 'Message*',type:"text",placeholder: "Your message",required:true,}

export const signInForm: InputFormsInterface[] = [
    { labelName: 'Email',type:"email",placeholder: "Your working email",required:true,},
    { labelName: 'Password',type:"password",placeholder: "************",required:true,},
] 

export const signUpForm: InputFormsInterface[] = [
    { labelName: 'Full Name',type:"text",placeholder: "Your full name",required:true,},
    { labelName: 'Email',type:"email",placeholder: "Your working email",required:true,},
    { labelName: 'Password',type:"password",placeholder: "************",required:true,},
    { labelName: 'Confirm Password',type:"password",placeholder: "************",required:true,},
] 

