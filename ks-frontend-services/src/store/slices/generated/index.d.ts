import { default as authUser } from './authUser';
export { authUser };
import { default as company } from './company';
export { company };
import { default as credit } from './credit';
export { credit };
import { default as document } from './document';
export { document };
import { default as event } from './event';
export { event };
import { default as infoAuth } from './infoAuth';
export { infoAuth };
import { default as infoCompany } from './infoCompany';
export { infoCompany };
import { default as infoEntity } from './infoEntity';
export { infoEntity };
import { default as infoGhost } from './infoGhost';
export { infoGhost };
import { default as infoIP } from './infoIP';
export { infoIP };
import { default as infoQuery } from './infoQuery';
export { infoQuery };
import { default as job } from './job';
export { job };
import { default as monitor } from './monitor';
export { monitor };
import { default as payment } from './payment';
export { payment };
import { default as rate } from './rate';
export { rate };
import { default as subscription } from './subscription';
export { subscription };
export declare const slices: {
    authUser: import("@reduxjs/toolkit").Slice<import("./authUser").AuthUserState, {
        fetched: (state: import("./authUser").AuthUserState, action: {
            payload: import("../../..").AuthUser[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").AuthUser[];
            allIds: string[];
        };
    }, "authUser">;
    company: import("@reduxjs/toolkit").Slice<import("./company").CompanyState, {
        fetched: (state: import("./company").CompanyState, action: {
            payload: import("../../..").Company[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Company[];
            allIds: string[];
        };
    }, "company">;
    credit: import("@reduxjs/toolkit").Slice<import("./credit").CreditState, {
        fetched: (state: import("./credit").CreditState, action: {
            payload: import("../../..").Credit[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Credit[];
            allIds: string[];
        };
    }, "credit">;
    document: import("@reduxjs/toolkit").Slice<import("./document").DocumentState, {
        fetched: (state: import("./document").DocumentState, action: {
            payload: import("../../..").Document[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Document[];
            allIds: string[];
        };
    }, "document">;
    event: import("@reduxjs/toolkit").Slice<import("./event").EventState, {
        fetched: (state: import("./event").EventState, action: {
            payload: import("../../..").Event[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Event[];
            allIds: string[];
        };
    }, "event">;
    infoAuth: import("@reduxjs/toolkit").Slice<import("./infoAuth").InfoAuthState, {
        fetched: (state: import("./infoAuth").InfoAuthState, action: {
            payload: import("../../..").InfoAuth[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").InfoAuth[];
            allIds: string[];
        };
    }, "infoAuth">;
    infoCompany: import("@reduxjs/toolkit").Slice<import("./infoCompany").InfoCompanyState, {
        fetched: (state: import("./infoCompany").InfoCompanyState, action: {
            payload: import("../../..").InfoCompany[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").InfoCompany[];
            allIds: string[];
        };
    }, "infoCompany">;
    infoEntity: import("@reduxjs/toolkit").Slice<import("./infoEntity").InfoEntityState, {
        fetched: (state: import("./infoEntity").InfoEntityState, action: {
            payload: import("../../..").InfoEntity[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").InfoEntity[];
            allIds: string[];
        };
    }, "infoEntity">;
    infoGhost: import("@reduxjs/toolkit").Slice<import("./infoGhost").InfoGhostState, {
        fetched: (state: import("./infoGhost").InfoGhostState, action: {
            payload: import("../../..").InfoGhost[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").InfoGhost[];
            allIds: string[];
        };
    }, "infoGhost">;
    infoIP: import("@reduxjs/toolkit").Slice<import("./infoIP").InfoIPState, {
        fetched: (state: import("./infoIP").InfoIPState, action: {
            payload: import("../../..").InfoIP[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").InfoIP[];
            allIds: string[];
        };
    }, "infoIP">;
    infoQuery: import("@reduxjs/toolkit").Slice<import("./infoQuery").InfoQueryState, {
        fetched: (state: import("./infoQuery").InfoQueryState, action: {
            payload: import("../../..").InfoQuery[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").InfoQuery[];
            allIds: string[];
        };
    }, "infoQuery">;
    job: import("@reduxjs/toolkit").Slice<import("./job").JobState, {
        fetched: (state: import("./job").JobState, action: {
            payload: import("../../..").Job[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Job[];
            allIds: string[];
        };
    }, "job">;
    monitor: import("@reduxjs/toolkit").Slice<import("./monitor").MonitorState, {
        fetched: (state: import("./monitor").MonitorState, action: {
            payload: import("../../..").Monitor[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Monitor[];
            allIds: string[];
        };
    }, "monitor">;
    payment: import("@reduxjs/toolkit").Slice<import("./payment").PaymentState, {
        fetched: (state: import("./payment").PaymentState, action: {
            payload: import("../../..").Payment[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Payment[];
            allIds: string[];
        };
    }, "payment">;
    rate: import("@reduxjs/toolkit").Slice<import("./rate").RateState, {
        fetched: (state: import("./rate").RateState, action: {
            payload: import("../../..").Rate[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Rate[];
            allIds: string[];
        };
    }, "rate">;
    subscription: import("@reduxjs/toolkit").Slice<import("./subscription").SubscriptionState, {
        fetched: (state: import("./subscription").SubscriptionState, action: {
            payload: import("../../..").Subscription[];
            type: string;
        }) => {
            fetchedList: boolean;
            id?: string;
            isLoading: boolean;
            isSubmitting: boolean;
            data: import("../../..").Subscription[];
            allIds: string[];
        };
    }, "subscription">;
};
