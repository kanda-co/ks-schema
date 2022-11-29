export interface MutateHook {
    mutate: (...arg: any[]) => Promise<{
        data: Record<string, unknown>;
        error?: any;
    } | {
        error: any;
        data?: undefined;
    }>;
    error: any;
    data: Record<string, unknown>;
    isSubmitting: boolean;
    isLoading: boolean;
}
export default function useMutate(method: Function): MutateHook;
