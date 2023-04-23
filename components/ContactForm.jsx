import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const ContactForm = () => {

    const { register, control, handleSubmit, setValue, formState } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            subject: '',
            messageBody: '' //letting JS imply the type in lieu of TS
        }
    });

    const { errors } = formState

    const submit = (data) => {
        console.log('form submitted', data);
    }

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue caret' type="text" {...register('name', { required: 'Please provide your name.' })} />
                        <p className='text-red-500 mb-4 text-left text-xs'>{errors.name?.message}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" {...register('phone', {
                            required: {
                                value: true,
                                message: "Please provide your phone number.",
                                pattern: {
                                    value: /^(\+(?!1)[1-9]\d{0,2}|\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$|^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
                                    message: 'Make sure there are no typos in your phone number!'
                                }
                            }
                        })} />
                        <p className='text-red-500 mb-4 text-left text-xs'>{errors.phone?.message}</p>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="email" {...register('email', {
                        required: {
                            value: true,
                            message: ' Please provide an email',
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Make sure there are no typos in your email!'
                            }
                        }
                    })} />
                    <p className='text-red-500 mb-4 text-left text-xs'>{errors.email?.message}</p>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" {...register('subject', {
                        required: {
                            value: true,
                            message: "Please provide a subject.",
                            maxLength: {
                                value: 100,
                                message: 'Please keep the subject under 100 characters.'
                            }
                        }
                    })} />
                    <p className='text-red-500 mb-4 text-left text-xs'>{errors.subject?.message}</p>
                </div>
                <div className='flex flex-col py-2' >
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' rows='10' {...register('messageBody', {
                        required: {
                            value: true,
                            message: 'Make sure to write a message before submitting',
                            maxLength: {
                                value: 5000,
                                message: `Please keep your message under 5000 characters. You're always welcome to schedule a call.`
                            }
                        }
                    })} />
                    <p className='text-red-500 mb-4 text-left text-xs'>{errors.messageBody?.message}</p>
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>Send Message</button>
            </form>
            {/* <DevTool control={control} /> */}
        </div>
    )
}

export default ContactForm