import React, {
  Component
} from 'react';

class Home extends Component {
  render() {
    return (
      <div id="app">
        <div className="bg-primary">
          <div className="container justify-content-between d-flex todo-nav">
            <a href="#">My Task</a>
            <a href="#">In Progress</a>
            <a href="#">Completed</a>
          </div>
        </div>
        <div className="container my-4">
          <div className="position-relative">
            <i className="fas fa-plus fa-lg text-black-50 position-absolute" style={{left: '1rem', top: '1.15rem'}} />
            <input type="text" className="form-control form-control-lg pl-5" />
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <div className="todo-item active">
              <div className="todo-header">
                <div className="todo-check" />
                <div className="todo-title">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="todo-body">
                <div className="todo-content">
                  <div className="todo-row">
                    <div className="todo-icon">
                      <i className="far fa-calendar-alt" />
                    </div>
                    <div>
                      <label htmlFor="deadline">Deadline</label>
                      <div className="form-inline todo-form-control">
                        <input type="date" className="form-control border-0" />
                        <input type="date" className="form-control border-0 ml-2" />
                      </div>
                    </div>
                  </div>
                  <div className="todo-row">
                    <div className="todo-icon">
                      <i className="far fa-comment-dots" />
                    </div>
                    <div className="todo-form-control">
                      <label htmlFor="comment">Comment</label>
                      <div className="bg-white p-3 my-3">item</div>
                      <div>
                        <textarea name="" className="form-control w-100 border-0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="todo-btn-group d-flex">
                  <button className="btn text-danger w-50 btn-lg">
                    <i className="fas fa-times" /> Cancel
                  </button>
                  <button className="btn btn-primary w-50 btn-lg">
                    <i className="fas fa-plus" /> Update Task
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="todo-item">
              <div className="handle text-muted"><i className="fas fa-ellipsis-v" /></div>
              <div className="todo-header">
                <div className="todo-check">
                  <input type="checkbox" id="1" />
                  <label htmlFor="todo-check-1" />
                </div>
                <label className="todo-title" htmlFor="todo-check-1">
                  <span>message</span>
                </label>
                <div className="todo-control">
                  <a href="#" className="text-muted">
                    <i className="far fa-star mr-3" />
                  </a>
                  <a href="#" className="text-muted"><i className="fas fa-pencil-alt" /></a>
                </div>
              </div>
              <div className="todo-footer text-secondary">
                <i className="far fa-calendar-alt" />
                <span>from: startDate</span>
                <span v-if="todo.startDate && todo.endDate"> ~ </span>
                <span>to: endDate</span>
                <i className="fas fa-comment-dots ml-3" /> comments length
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
