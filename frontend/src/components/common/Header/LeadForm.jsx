
import {useForm,Controller} from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2'

const liveOptions = [
    { value: 'Mess', label: 'Mess' },
    { value: 'Hostel', label: 'Hostel' },
    { value: 'Pg', label: 'Pg' }
]

const LeadForm = () => {
    const {register, handleSubmit,control, formState : {errors}} = useForm({
        defaultValues: {
        name: '',
        mobileNumber: '',
        lookingFor: '',
        wantToLiveIn: []
    }});

    const onSubmit = async(data) => {
        const formattedData = {...data, wantToLiveIn: data.wantToLiveIn.map(option => option.value)};
        try {
          const apiUrl = import.meta.env.VITE_API_URL;
          const res = await axios.post(`${apiUrl}/create-lead`,formattedData);
          const resData = res.data;
        
          if(resData.success){
            Swal.fire({
              title: `${resData.message}`,
              text: "We will connect with you soon.",
              icon: "success"
            })
          }
          else{
            Swal.fire({
              title: `${resData.message}`,
              text: "Try Again!",
              icon: "error"
            })
          }
        } catch (error) {
          Swal.fire({
            title: `${error}`,
            text: "Try Again!",
            icon: "error"
          })
        }
    }

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        
      <div className="col-md-4 col-lg-3">
        <label className="d-block">Your Name</label>
        <input type="text" {...register('name',{
            required: 'Name is required',
            minLength: { value: 3, message: 'Name must be at least 3 characters long' },
            maxLength: { value: 30, message: 'Name must be at most 30 characters long' }
          })} 
          name="name" placeholder="Enter your name" />
        {errors.name && <p className='error'>{errors.name.message}</p>}
      </div>

      <div className="col-md-4 col-lg-2">
        <label className="d-block">Mobile Number</label>
        <input type="text" {...register('mobileNumber',{
                required: 'Mobile number is required',
                pattern: {
                value: /^\d{10}$/,
                message: 'Invalid mobile number, must be 10 digits'
                }
            })} 
            name="mobileNumber" placeholder="Eg.786525xx" />
        {errors.mobileNumber && <p className='error'>{errors.mobileNumber.message}</p>}
      </div>

      <div className="col-md-4 col-lg-3">
        <label className="d-block">What Are You Looking For?</label>
        <select name="lookingFor" {...register('lookingFor', { required: 'What Are You Looking For? is required' })}>
          <option value="">Please select</option>
          <option value="JEE">JEE</option>
          <option value="NEET">NEET</option>
        </select>
        {errors.lookingFor && <p className='error'>{errors.lookingFor.message}</p>}
      </div>

      <div className="col-md-4 col-lg-4">
        <label className="d-block">I Want to Live In</label>
        <Controller
            name="wantToLiveIn"
            control={control}
            rules={{ required: 'I Want to Live In field is required' }}
            render={({ field }) => (
                <Select
                    {...field}
                    isMulti
                    options={liveOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    getOptionValue={(option) => option.value}
                    getOptionLabel={(option) => option.label}
                />
            )}
        />
        {errors.wantToLiveIn && <p className='error'>{errors.wantToLiveIn.message}</p>}
      </div>

      <div className="col-12">
        <button type="submit" className="secondary-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LeadForm;
