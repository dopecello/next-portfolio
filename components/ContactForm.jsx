import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const ContactForm = () => {

    const { register, control, handleSubmit, watch, setValue, formState } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            subject: '',
            messageBody: '' //letting JS imply the type in lieu of TS
        }
    });

    const { errors } = formState
    const messageBodyValue = watch('messageBody', '');
    const messageBodyLength = messageBodyValue.length;
    const isMessageBodyExceedingLimit = messageBodyLength > 5000;

    const submit = (data) => {
        console.log('form submitted', data);
    }

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit(submit)}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue caret' type="text" {...register('name', { required: 'Please provide your name.' })} />
                        <p className='text-red-500 mb-4 text-left text-xs'>{errors.name?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" {...register('phone', {
                            required: 'Please provide a valid phone number.',
                            pattern: {
                                value: /^(\+(?!1)[1-9]\d{0,2}|\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$|^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
                                message: "Make sure your phone number is in the proper format."
                            }
                        })} />
                        <p className='text-red-500 mb-4 text-left text-xs'>{errors.phone && errors.phone?.message}</p>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="email" {...register('email', {
                        required: 'Please provide a valid email.',
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Make sure your phone number is in the proper format."
                        }
                    })} />
                    <p className='text-red-500 mb-4 text-left text-xs'>{errors.email && errors.email?.message}</p>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" {...register('subject', {
                        required: "Don't forget a subject!",
                        maxLength: {
                            value: 100,
                            message: "Please keep the subject under 100 characters."
                        }
                    })} />
                    <p className='text-red-500 mb-4 text-left text-xs'>{errors.subject && errors.subject?.message}</p>
                </div>
                <div className='flex flex-col py-2' >
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' rows='10' {...register('messageBody', {
                        required: 'A message under is required before submitting.',
                        maxLength: {
                            value: 5000,
                            message: "Please keep your message under 5000 characters. You're always welcome to schedule a call."
                        }
                    })} />
                    <div className='flex flex-row justify-between'>
                        <p className='text-red-500 mb-4 text-left text-xs'>{errors.messageBody && errors.messageBody?.message}</p>
                        <span className={`text-xs ${isMessageBodyExceedingLimit ? 'text-red-500' : 'text-black'}`}>{messageBodyLength}/5000</span>
                    </div>
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>Send Message</button>
            </form>
            {/* <DevTool control={control} /> */}
        </div>
    )
}

export default ContactForm