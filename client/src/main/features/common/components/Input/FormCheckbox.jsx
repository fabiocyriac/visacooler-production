const FormCheckbox = ({ label, name, defaultValue, value, checked, handleChange, size }) => {
  return (
    <div className='form-control items-left'>
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type='checkbox'
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultValue}
        onChange={handleChange}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
