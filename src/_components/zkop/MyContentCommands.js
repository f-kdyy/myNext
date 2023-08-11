import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faRotate, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

const primaryStatus = "";
const successStatus = "success";
const warnStatus = "warning";
const errorStatus = "danger";

function mapModuleStatus(show, module) {
    switch (module.status) {
      case "success":
        show.value = "成功";
        show.style = successStatus;
        break;
      case "fail":
        show.value = "失败";
        show.style = errorStatus;
        break;
      case "running":
        show.value = "正在进行";
        show.style = primaryStatus;
        break;
      default:
        show.value = "未知";
        show.style = warnStatus;
    }
}

export default function MyContentCommands() {
  const [showModal, setShowModal] = useState(false);
  const [req, setReq] = useState(null);
  const [statusData, setStatusData] = useState({
      data: {
        crm: {
            status: "unknown",
            currentDate: "unknown",
            lastDate: "unknown"
        },
        zk: {
            status: "unknown",
            currentDate: "unknown",
            lastDate: "unknown"
        },
        sync: {
            status: "unknown",
            currentDate: "unknown",
            lastDate: "unknown"
        }
      }
    })

  const handleClose = () => setShowModal(false);

  const handleShow = (module, cmd) => {
    setShowModal(true);
    setReq({
      m: module,
      c: cmd,
    });
  };

  const fetchData = (req) => {
    handleClose();

    if (req === null) {
      return;
    } else {
      const {module, cmd} = req;

      fetch(`/api/${module}?action=exec&param${cmd}`, {
        method: 'GET',
      })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else if (resp.status === 404) {
          throw new Error('请求的资源未找到');
        } else {
          return resp.json().then(error => {
            throw new Error(error.message);
          });
        }
      })
      .then(ret => {
        if (ret.status === 'success') {
          // toast.success('exec success.');
        }
        if (ret.status === 'fail') {
          // toast.error(data.ret);
        }
      })
      .catch(err => {
        // toast.error(err.message);
      });
    }
  };

  useEffect(() => {
    fetch('/api/executeTask?action=init&param=initContent', {
        method: 'GET'
    })
    .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else {
          return resp.json().then( err => {
              return new Error(err.message);
          })
        }
    })
    .then( ret => {
        const message = JSON.parse(ret.message);
        if (ret.status === 200) {
            setStatusData(message);
        } else {
            console.log(message)
        }
    })
  },[])

  const crmShow = {
    value: "",
    style: primaryStatus
  }

  const syncShow = {
    value: "",
    style: primaryStatus
  }

  const zkShow = {
    value: "",
    style: primaryStatus
  }

  const {crm, zk, sync} = statusData.data;

  mapModuleStatus(crmShow, crm);
  mapModuleStatus(syncShow, sync);
  mapModuleStatus(zkShow, zk);

  return (
    <div className='content-commands'>
        <Card className='text-center'>
            <Card.Header>CRM - 批处理</Card.Header>
            <Card.Body>
                <Card.Title>状态：<span className={crmShow.style}>{crmShow.value}</span></Card.Title>
            </Card.Body>
            <Card.Footer>
                <div className='foot-date-sp'>
                  <span className='card-span'>数据日期：{crm.currentDate}</span>
                  <span className='card-span'>下次日期：{crm.lastDate}</span>
                </div>
            </Card.Footer>
        </Card>
        <Card className={`text-center ${zkShow.style}`}>
            <Card.Header>知客 - 批处理</Card.Header>
            <Card.Body>
                <Card.Title>状态：<span className={zkShow.style}>{zkShow.value}</span></Card.Title>
            </Card.Body>
            <Card.Footer>
                <div className='foot-date'>
                  <span className='card-span'>数据日期：{crm.currentDate}</span>
                  <span className='card-span'>下次日期：{crm.lastDate}</span>
                </div>
                <div className='foot-funcs'>
                  <div className='foot-funcs-start' onClick={() => handleShow('executeTask', 'start')}>
                    <FontAwesomeIcon icon={faPlay} className='fa' style={{color: "#7ef447",}}/>
                    <span className='card-span-btn'>开始批处理</span>
                  </div>
                  <div className='foot-funcs-stop'>
                    <FontAwesomeIcon icon={faStop} className='fa' style={{color: "#ff3943",}}/>
                    <span className='card-span-btn'>停止批处理</span>
                  </div>
                </div>
            </Card.Footer>
        </Card>
        <Card className={`text-center ${syncShow.style}`}>
            <Card.Header>知客 - 数据同步</Card.Header>
            <Card.Body>
                <Card.Title>状态：<span className={syncShow.style}>{syncShow.value}</span></Card.Title>
            </Card.Body>
            <Card.Footer>
                <div className='foot-date'>
                  <span className='card-span'>数据日期：{crm.currentDate}</span>
                  <span className='card-span'>下次日期：{crm.lastDate}</span>
                </div>
                <div className='foot-funcs'>
                  <div className='foot-funcs-start'>
                    <FontAwesomeIcon icon={faPlay} className='fa' style={{color: "#7ef447",}}/>
                    <span className='card-span-btn'>开始同步</span>
                  </div>
                  <div className='foot-funcs-stop'>
                    <FontAwesomeIcon icon={faStop} className='fa' style={{color: "#ff3943",}}/>
                    <span className='card-span-btn'>停止同步</span>
                  </div>
                  <div className='foot-funcs-sync'>
                    <FontAwesomeIcon icon={faRotate} className='fa' style={{color: "#7ef447",}}/>
                    <span className='card-span-btn'>加载缓存</span>
                  </div>
                </div>
            </Card.Footer>
        </Card>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>确认</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <FontAwesomeIcon icon={faCircleQuestion} className='fa' />
           确认执行该命令吗？
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              取消
            </Button>
            <Button variant="primary" onClick={() => fetchData(req)}>
              确认
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}
