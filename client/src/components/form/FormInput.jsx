const FormInput = ({ label, name, type, value, handleChange, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;
