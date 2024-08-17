import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginPayload } from '../types/LoginPayload';
import constants from '../utils/constants';
import { LoginResponse } from '../types/LoginResponse';
import { User } from '../types/User';
import { GetUsersPayload } from '../types/GetUsersPayload';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: constants.baseUrl }),    
    tagTypes: ['Login', 'Users'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, LoginPayload>({
            query: (loginData: LoginPayload) => ({
                url: '/api/account/login',
                method: 'POST',
                body: loginData,
            }),
            invalidatesTags: ['Login'],
        }),
        getUsers: builder.query<{ users: User[] }, GetUsersPayload>({
            query: (usersPayload: GetUsersPayload) => ({
                url: `/api/user/users?numberProfiles=${usersPayload.numberOfUsers} `,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${usersPayload.token}`
                }
            }),
            providesTags: ['Users'],

        }),
    })
})

export const { useLoginUserMutation, useGetUsersQuery } = apiSlice;