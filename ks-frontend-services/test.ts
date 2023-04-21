// Entity Adapter
const jobAdapter = createEntityAdapter<Job>();

const jobAdapterResponseHandler = createEntityResponseHandler(jobAdapter);

const jobAdaptedSlice = createSlice({
  name: 'jobAdapted',
  initialState: jobAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJob.fulfilled, jobAdapterResponseHandler);
  },
});
