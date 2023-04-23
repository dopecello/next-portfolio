import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const ContactForm = () => {

    const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    const submit = (data) => {
        console.log('form submitted', data);
    }

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit(submit)}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue caret' type="text" {...register('name')} />
                        {errors.title && errors.title.type === "required" && (
                            <span role="alert" className='text-red-500'>An event title is required.</span>
                        )}
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" {...register('phone')} />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="email" {...register('email')} />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' type="text" {...register('subject')} />
                </div>
                <div className='flex flex-col py-2' >
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-200 focus-visible:outline-lite-blue focus-visible:border-lite-blue' rows='10' {...register('message')} />
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>Send Message</button>
            </form>
            {/* <DevTool control={control} disabled={true} /> */}
        </div>
    )
}

export default ContactForm