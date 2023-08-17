import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { Form, InputGroup, Dropdown, Offcanvas } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import zh from 'date-fns/locale/zh-CN'
import { format } from 'date-fns';
import { toast } from 'react-toastify';

export default function MyContentTable() {
  const [searchText, setSearchText] = useState('');
	const [show, setShow] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(['0', '1', '2']);
  // const [dataLoaded, setDataLoaded] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	const [startDate, setStartDate] = useState(new Date());

  const [data, setData] = useState([{
    log_seq: 0,
    module_name: "",
    unit_name: "",
    data_dt: "",
    log_dt: "",
    log_time: "",
    log_text: "未加载数据",
    log_sts: '1'
  }]);
  const [filteredData, setFilteredData] = useState(data);

  const [timer, setTimer] = useState(null);
  const startTimer = (dataDate) => {
    if (timer) {
      clearInterval(timer);
    }
    setTimer(setInterval(() => fetchData(dataDate), 5000));
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const fetchData = (dataDate) => {
		const date = dataDate === undefined ? '' : format(dataDate, 'yyyyMMdd')
    
    fetch(`/api/executeTask?action=query&param=log&date=${date}`, {
      method: 'GET',
    }).then( res => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then( error => {
            throw new Error(error.message);
          });
        }
    }).then( ret => {
      if (ret.status === '200') {
        const message = JSON.parse(ret.message);
        const logs = message.logs
        if (logs.length === 0) {
          setData([{
            log_seq: 0,
            module_name: "",
            unit_name: "",
            data_dt: "",
            log_dt: "",
            log_time: "",
            log_text: "未查询到数据",
            log_sts: '2'
          }]);
        } else {
          setData(logs);
        }
      }
    }).catch( err => {
      toast.error(err.message);
    });
  };

  useEffect(() => {
    fetchData(startDate)
    return () => {
      stopTimer();
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchText, selectedStatus, data]);

  const handleFetchData = (dataDate) => {
    setStartDate(dataDate);
    setChecked(false);
    stopTimer();
    fetchData(dataDate);
  };

  const handleSwitchChange = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      console.log(e.target.checked);
      startTimer(startDate);
    } else {
      console.log(e.target.checked);
      stopTimer();
    }
  };

  const applyFilters = () => {
    const searchRegex = new RegExp(searchText, 'i');
    const filteredResults = data.filter((item) =>
      searchRegex.test(item.log_text) &&
      (selectedStatus.includes(item.log_sts) || (item.log_sts === '2' && selectedStatus.includes('2')))
    );
    setFilteredData(filteredResults);
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    // 在搜索文字变化时应用过滤逻辑
    applyFilters();
  }

  const handleStatusChange = (event) => {
    const selectedValue = event.target.value;
    
    let updatedStatus;
    let displayText = 'Status ∙ ';
    if (selectedValue === '所有') {
      if (selectedStatus.includes('0') && selectedStatus.includes('1') && selectedStatus.includes('2')) {
        updatedStatus = [];
      } else {
        updatedStatus = ['0', '1', '2'];
      }
    } else {
      updatedStatus = selectedStatus.includes(selectedValue)
        ? selectedStatus.filter(status => status !== selectedValue)
        : [...selectedStatus, selectedValue];
    }

    setSelectedStatus(updatedStatus);
    // 在状态选择变化时应用过滤逻辑
    applyFilters();
  };

  // const displayData = searchText ? filteredData : data;
  return (
    <div>
      <div className='table-header'>
        <div className='table-header-search'>
          <FontAwesomeIcon icon={faSearch} className='fa'/>
          <InputGroup>
              <Form.Control 
                  placeholder='Search'
                  value={searchText}
                  onChange={handleSearchChange}
              />
          </InputGroup>
        </div>
				
        <div className='table-header-funcs'>
					<div>
						<ReactDatePicker locale={zh} selected={startDate} onChange={ (date) => handleFetchData(date) } dateFormat="yyyy-MM-dd" />
					</div>
					
          <Dropdown>
            <Dropdown.Toggle>
              状态过滤
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Form key='todo-checkbox'>
                <Form.Check 
                  type='checkbox'
                  label='正常'
                  name='todo-checkbox'
                  value='1'
                  checked={selectedStatus.includes('1')}
                  onChange={handleStatusChange}
                />
                <Form.Check 
                  type='checkbox'
                  label='错误'
                  name='todo-checkbox'
                  value='2'
                  checked={selectedStatus.includes('2')}
                  onChange={handleStatusChange}
                />
                <Form.Check 
                  type='checkbox'
                  label='所有'
                  name='todo-checkbox'
                  value='所有'
                  checked={selectedStatus.includes('0') && selectedStatus.includes('1') && selectedStatus.includes('2')}
                  onChange={handleStatusChange}
                />
              </Form>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              模块过滤
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Form>
                <Form.Check 
                  type='checkbox'
                  label='PUBLIC_INFO'
                  name='todo-checkbox1'
                />
                <Form.Check 
                  type='checkbox'
                  label='PERSON_ACCOUNT'
                  name='todo-checkbox1'
                />
                <Form.Check 
                  type='checkbox'
                  label='NOTICES'
                  name='todo-checkbox1'
                />
								<Form.Check 
                  type='checkbox'
                  label='TRADE'
                  name='todo-checkbox1'
                />
                	<Form.Check 
                  type='checkbox'
                  label='FUND'
                  name='todo-checkbox1'
                />
                	<Form.Check 
                  type='checkbox'
                  label='PERF'
                  name='todo-checkbox1'
                />
              </Form>
            </Dropdown.Menu>
          </Dropdown>

          <Form>
            <Form.Check 
              type='switch'
              id='autofetch-switch'
              label='自动刷新 (5秒)'
              checked={isChecked}
              onChange={handleSwitchChange}
            />
          </Form>
        </div>
      </div>
      <div className='table-content'>
        <table>
          <thead>
            <tr>
              <th>module name</th>
              <th>unit name</th>
              <th>log date</th>
              <th>log time</th>
              <th>log text</th>
              <th>btn</th>
            </tr>
          </thead>
          <tbody>
            {/* {dataLoaded ?
            	<tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              </tr>
              : (
                filteredData.map( item => {
                  return (
                    <tr key={item.log_seq}>
                      <td>{item.unit_name}</td>
                      <td>{item.module_name}</td>
                      <td>{item.log_dt}</td>
                      <td>{item.log_time}</td>
                      <td>{item.log_text}</td>
                    </tr>
                  )
                })
              ) */
              filteredData.map( item => {
                return (
                  <tr key={item.log_seq}>
                    <td>{item.unit_name}</td>
                    <td>{item.module_name}</td>
                    <td>{item.log_dt}</td>
                    <td>{item.log_time}</td>
                    <td>{item.log_text}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

			<Offcanvas show={show} onHide={handleClose} placement='top'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Offcanvas</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the elements you
					have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
    </div>
  )
}
