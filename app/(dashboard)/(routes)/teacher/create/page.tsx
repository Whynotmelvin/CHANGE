"use client"
import * as z  from 'zod';
import axios from 'axios' ;
import { useRouter } from 'next/router';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {
    Form,
    FormControl,
    FormLabel,
    FormDescription,
    FormMessage

} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CreatePage = ()=>{
    return(
        <div>
            Create Page
        </div>
    )
}

export default CreatePage;