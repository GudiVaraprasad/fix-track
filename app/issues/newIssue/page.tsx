'use client';

import { Text, TextField, Button, Callout } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMsg from '@/app/components/ErrorMsg';

type IssueForm = z.infer<typeof createIssueSchema>;

const newIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) });

  const [error, setError] = useState<string | null>(null);

  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color="red" className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>

      }
      <form
        className='space-y-3'
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data);
            router.push('/issues');

          } catch (error) {
            setError('An unexpected error occured!')
          }
        })}>
        <TextField.Root placeholder='Title' {...register('title')} >
        </TextField.Root>
        <ErrorMsg>{errors.title?.message}</ErrorMsg>
        <Controller
          name="description"
          control={control}
          render={({ field }) =>
            (<SimpleMDE placeholder="Description" {...field} />)
          }
        />
        <ErrorMsg>{errors.description?.message}</ErrorMsg>
        <Button>Submit New Issue</Button>
      </form>
    </div>
  )
}

export default newIssuePage