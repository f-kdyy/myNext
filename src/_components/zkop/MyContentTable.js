import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form, InputGroup, Dropdown, Button, Offcanvas } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import zh from 'date-fns/locale/zh-CN'


export default function MyContentTable() {
	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
	const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
        <div className='table-header'>
            <div className='table-header-search'>
                <FontAwesomeIcon icon={faSearch} className='fa'/>
                <InputGroup>
                    <Form.Control 
                        placeholder='Search'
                    />
                </InputGroup>
								<ReactDatePicker locale={zh} selected={startDate} onSelect={setStartDate} />
            </div>
						
            <div className='table-header-funcs'>
                <Dropdown>
                    <Dropdown.Toggle>
                        Status ∙ 
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Form key='todo-radio'>
                            <Form.Check 
                                type='radio'
                                label='正常'
                                name='todo-radio'
                            />
                            <Form.Check 
                                type='radio'
                                label='错误'
                                name='todo-radio'
                            />
                            <Form.Check 
                                type='radio'
                                label='所有'
                                name='todo-radio'
                            />
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle>
                        Sort by 
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Form>
                            <Form.Check 
                                type='radio'
                                label='正常'
                                name='todo-radio1'
                            />
                            <Form.Check 
                                type='radio'
                                label='错误'
                                name='todo-radio1'
                            />
                            <Form.Check 
                                type='radio'
                                label='所有'
                                name='todo-radio1'
                            />
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
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
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                        <td>
                            <Button variant='primary' onClick={handleShow}>
                                lanuch
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
                    <tr>
                        <td>batch daily</td>
                        <td>perf</td>
                        <td>20230801</td>
                        <td>18:22</td>
                        <td>下载第一步,先在vscode里面点击这个 2.在搜索栏里面输入open in Default Browser 然后找到这个插件点击安装 注意:这个下载的插件是要联网才能下载的 3.下载完成后就关闭vscode,然后再重新打开。</td>
                    </tr>
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
